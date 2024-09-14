import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    async get(res: Response) {
        try {
            const users = await UserService.getAll();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

     
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const photo = req.file?.buffer;

        try {
            const updatedUser = await UserService.update(id, { name, email, password, photo });
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const result = await UserService.delete(id);
            if (!result) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(204).send(); // No content
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
