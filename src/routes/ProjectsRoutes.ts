import { Router } from "express";
import { ProjectController } from "../controller/ProjectController";

const projectRoutes = Router()

projectRoutes.get('/', new ProjectController().get)
projectRoutes.post('/', new ProjectController().create)
projectRoutes.put('/', new ProjectController().update)
projectRoutes.delete('/', new ProjectController().delete)

export default projectRoutes