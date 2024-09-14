import { Router } from "express";
import { UserController } from "../controller/UserController";

const userRoutes = Router()

userRoutes.get('/', new UserController().get)
userRoutes.post('/', new UserController().create)
userRoutes.put('/', new UserController().update)

export default userRoutes