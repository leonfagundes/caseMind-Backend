import authRoutes from "./routes/AuthRoutes";
import projectRoutes from "./routes/ProjectsRoutes";
import taskRoutes from "./routes/UserRoutes";
import userRoutes from "./routes/UserRoutes"
import { Router } from "express"

const routes = Router(); 

routes.use('/user', userRoutes);
routes.use('/task', taskRoutes);
routes.use('/project', projectRoutes);
routes.use('/auth', authRoutes)

export default routes;
