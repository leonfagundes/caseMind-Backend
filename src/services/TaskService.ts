import AppDataSource from "../data-source";
import { Task, TaskStatus } from "../entities/Task";
import { Project } from "../entities/Project";
import { User } from "../entities/User";

const taskRepository = AppDataSource.getRepository(Task);
const projectRepository = AppDataSource.getRepository(Project);
const userRepository = AppDataSource.getRepository(User);

export class TaskService {
  static async getAll() {
    return await taskRepository.find({ relations: ["project", "user"] });
  }

  static async create(name: string, description: string, deliveryDate: Date, projectId: number, userId: number) {
    const project = await projectRepository.findOneBy({ id: Number(projectId) });
    const user = await userRepository.findOneBy({ id: Number(userId) });

    if (!project || !user) {
      throw new Error("Project or User not found");
    }

    const task = taskRepository.create({
      name,
      description,
      deliveryDate,
      status: TaskStatus.PENDING,
      project,
      user,
    });

    return await taskRepository.save(task);
  }

  static async update(id: string, { name, description, deliveryDate, status}: Partial<Task>,  projectId: number, userId: number ) {
    const task = await taskRepository.findOneBy({ id: Number(id) });
    if (!task) return null;

    const project = projectId ? await projectRepository.findOneBy({ id: Number(projectId) }) : task.project;
    const user = userId ? await userRepository.findOneBy({ id: Number(userId) }) : task.user;

    if (!project || !user) {
      throw new Error("Project or User not found");
    }

    task.name = name ?? task.name;
    task.description = description ?? task.description;
    task.deliveryDate = deliveryDate ?? task.deliveryDate;
    task.status = status ?? task.status;
    task.project = project;
    task.user = user;

    return await taskRepository.save(task);
  }

  static async delete(id: string) {
    const task = await taskRepository.findOneBy({ id: Number(id) });
    if (!task) return null;

    await taskRepository.remove(task);
    return true;
  }
}
