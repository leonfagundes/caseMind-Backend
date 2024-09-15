import { Request, Response } from "express";
import { ProjectService } from "../services/ProjectService";

export class ProjectController {

  // Corrigindo o método para receber req e res
  async get(req: Request, res: Response) {
    try {
      const projects = await ProjectService.getAll();
      res.status(200).json(projects);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async create(req: Request, res: Response) {
    const { name, description, deliveryDate } = req.body;

    try {
      const newProject = await ProjectService.create(name, description, deliveryDate);
      res.status(201).json(newProject);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, deliveryDate, status } = req.body;

    try {
      const updatedProject = await ProjectService.update(id, { name, description, deliveryDate, status });
      if (!updatedProject) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.status(200).json(updatedProject);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await ProjectService.delete(id);
      if (!result) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.status(204).send(); // No content
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
