import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const token = await AuthService.login(email, password);
            if (!token) {
                return res.status(401).json({ message: "Invalid email or password" });
            }
            return res.status(200).json({ token });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
