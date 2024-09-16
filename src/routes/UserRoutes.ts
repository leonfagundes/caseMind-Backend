import { Router } from "express";
import { UserController } from "../controller/UserController";
import { authMiddleware } from "../middlewares/AuthMiddleware";
import multer from "multer";

const upload = multer(); // Configura o multer para processar o form-data
const userRoutes = Router();

userRoutes.get('/', authMiddleware, new UserController().get);  // Obter todos os usuários
userRoutes.get('/:id', authMiddleware, new UserController().getById);  // Obter usuário por ID
userRoutes.post('/', upload.single('photo'), new UserController().create); // Adiciona o multer para processar a foto
userRoutes.put('/:id', authMiddleware, upload.single('photo'), new UserController().update);
userRoutes.delete('/:id', authMiddleware, new UserController().delete);

export default userRoutes;
