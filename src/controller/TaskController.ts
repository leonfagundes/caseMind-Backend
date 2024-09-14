import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

export class TaskController {
  async get(res: Response) {
    try {
      const tasks = await TaskService.getAll();
      res.status(200).json(tasks);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async create(req: Request, res: Response) {
    const { name, description, deliveryDate, projectId, userId } = req.body;

    try {
      const newTask = await TaskService.create(name, description, deliveryDate, projectId, userId);
      res.status(201).json(newTask);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, deliveryDate, status, projectId, userId } = req.body;

    try {
      const updatedTask = await TaskService.update(id, { name, description, deliveryDate, status },  projectId, userId);
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await TaskService.delete(id);
      if (!result) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(204).send(); // No content
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
