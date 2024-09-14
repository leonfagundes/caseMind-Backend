import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User';
import { Project } from "./Project";

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
        enum: ['pending', 'in_progress', 'completed'],
        default: 'pending'
    })
    status!: 'pending' | 'in_progress' | 'completed';

    @ManyToOne(() => Project, project => project.tasks)
    @JoinColumn()
    project!: Project;

    @ManyToOne(() => User, user => user.createdTasks)
    @JoinColumn()
    user!: User;
}
