import AppDataSource from "../data-source";
import { Project, ProjectStatus } from "../entities/Project";

const projectRepository = AppDataSource.getRepository(Project);

export class ProjectService {
  static async getAll() {
    return await projectRepository.find({ relations: ['tasks'] });
  }

  static async create(name: string, description: string, deliveryDate: Date) {
    const project = projectRepository.create({
      name,
      description,
      deliveryDate,
      status: ProjectStatus.PENDING,
    });
    return await projectRepository.save(project);
  }

  static async update(id: string, { name, description, deliveryDate, status }: Partial<Project>) {
    const project = await projectRepository.findOneBy({ id: Number(id) });
    if (!project) return null;

    project.name = name ?? project.name;
    project.description = description ?? project.description;
    project.deliveryDate = deliveryDate ?? project.deliveryDate;
    project.status = status ?? project.status;

    return await projectRepository.save(project);
  }

  static async delete(id: string) {
    const project = await projectRepository.findOneBy({ id: parseInt(id) });
    if (!project) return null;

    await projectRepository.remove(project);
    return true;
  }
}
