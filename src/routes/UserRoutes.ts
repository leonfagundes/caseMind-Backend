import { Router } from "express";
import { UserController } from "../controller/UserController";
import { authMiddleware } from "../middlewares/AuthMiddleware";

const userRoutes = Router();

userRoutes.get('/', authMiddleware, new UserController().get);  // Obter todos os usuários
userRoutes.get('/:id', authMiddleware, new UserController().getById);  // Obter usuário por ID
userRoutes.post('/', new UserController().create);
userRoutes.put('/:id', authMiddleware, new UserController().update);
userRoutes.delete('/:id', authMiddleware, new UserController().delete);

export default userRoutes;
