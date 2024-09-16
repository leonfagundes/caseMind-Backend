import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            // Fazer o login e pegar token + user info
            const loginResult = await AuthService.login(email, password);

            if (!loginResult) {
                return res.status(401).json({ message: "Invalid email or password" });
            }

            // Retornar token e informações do usuário
            return res.status(200).json({
                token: loginResult.token,
                user: loginResult.user,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
