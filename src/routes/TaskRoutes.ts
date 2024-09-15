import { Router } from "express";
import { TaskController } from "../controller/TaskController";

const taskRoutes = Router();

// Padrão REST para rotas
taskRoutes.get('/', new TaskController().get);
taskRoutes.post('/', new TaskController().create);
taskRoutes.put('/:id', new TaskController().update);  // Update recebe ID na URL
taskRoutes.delete('/:id', new TaskController().delete);  // Delete recebe ID na URL

export default taskRoutes;
