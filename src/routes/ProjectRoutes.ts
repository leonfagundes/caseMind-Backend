import { Router } from "express";
import { ProjectController } from "../controller/ProjectController";

const projectRoutes = Router()

projectRoutes.get('/', new ProjectController().get)
projectRoutes.post('/', new ProjectController().create)
projectRoutes.put('/:id', new ProjectController().update)
projectRoutes.delete('/:id', new ProjectController().delete)

export default projectRoutes