import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User';
import { Project } from "./Project";

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

@Entity('Tasks')
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text' })
  description?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  deliveryDate?: Date;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING
  })
  status!: TaskStatus;

  @ManyToOne(() => Project, project => project.tasks)
  @JoinColumn()
  project!: Project;

  @ManyToOne(() => User, user => user.createdTasks)
  @JoinColumn()
  user!: User;
}
