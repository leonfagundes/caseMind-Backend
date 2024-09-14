import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Task } from './Task';

// Definindo o enum para o status do projeto
export enum ProjectStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

@Entity('Projects')
export class Project {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  deliveryDate?: Date;

  @Column({
    type: 'enum',
    enum: ProjectStatus,
    default: ProjectStatus.PENDING, 
  })
  status!: ProjectStatus;

  @OneToMany(() => Task, task => task.project, { cascade: true, onDelete: 'CASCADE' })
  tasks?: Task[];
}
