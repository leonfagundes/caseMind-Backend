import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from './Task';

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    name!: string;

    @Column({ type: 'text' })
    email!: string;

    @Column({ type: 'text' })
    password!: string;

    @Column({ type: 'blob', nullable: true })
    photo?: Buffer;

    @OneToMany(() => Task, task => task.user)
    createdTasks!: Task[];
}
