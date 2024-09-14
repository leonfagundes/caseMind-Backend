import { Router } from "express";
import { AuthController } from "../controller/AuthController";

const authRoutes = Router()

authRoutes.post('/', new AuthController().login)

export default authRoutes