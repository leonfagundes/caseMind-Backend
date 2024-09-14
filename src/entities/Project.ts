import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Task } from './Task';

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
        enum: ['pending', 'in_progress', 'completed'],
        default: 'pending'
    })
    status!: 'pending' | 'in_progress' | 'completed';

    @OneToMany(() => Task, task => task.project)
    tasks?: Task[];
}
