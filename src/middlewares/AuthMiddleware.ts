import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthService";
import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = await AuthService.verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = decoded;  // Agora o TypeScript reconhece a propriedade 'user'
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
