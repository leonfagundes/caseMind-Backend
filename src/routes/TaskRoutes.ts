import { Router } from "express";
import { TaskController } from "../controller/TaskController";

const taskRoutes = Router()

taskRoutes.get('/', new TaskController().get)
taskRoutes.post('/', new TaskController().create)
taskRoutes.put('/', new TaskController().update)
taskRoutes.delete('/', new TaskController().delete)

export default taskRoutes
