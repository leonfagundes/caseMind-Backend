import { authMiddleware } from "./middlewares/AuthMiddleware";
import authRoutes from "./routes/AuthRoutes";
import projectRoutes from "./routes/ProjectRoutes"; // Corrigido de ProjectsRoutes para ProjectRoutes
import taskRoutes from "./routes/TaskRoutes"; // Corrigido de UserRoutes para TaskRoutes
import userRoutes from "./routes/UserRoutes";
import { Router } from "express";

const routes = Router(); 

routes.use('/users', userRoutes);  // Alterado para plural por consistência (opcional)
routes.use('/tasks', authMiddleware, taskRoutes);  // Alterado para plural por consistência (opcional)
routes.use('/projects', authMiddleware, projectRoutes);  // Alterado para plural por consistência (opcional)
routes.use('/auth', authRoutes);

export default routes;
