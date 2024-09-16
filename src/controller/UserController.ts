import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    async get(req: Request, res: Response) {
        try {
            const users = await UserService.getAll();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;  // Obtém o ID da URL

        try {
            const user = await UserService.getById(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async create(req: Request, res: Response) {

        const { name, email, password } = req.body;
        const photo = req.file?.buffer; 

        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Senha:', password ? '*****' : 'Nenhuma senha');
        console.log('Foto:', photo ? 'Foto enviada' : 'Nenhuma foto enviada');

        try {
            if (!name || !email || !password) {
                return res.status(400).json({ message: "Please provide name, email, and password." });
            }

            const newUser = await UserService.create(name, email, password, photo);
            res.status(201).json(newUser);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;  // ID na URL agora
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
        const { id } = req.params;  // ID na URL agora

        try {
            const result = await UserService.delete(id);
            if (!result) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(204).json({message: 'Usuáio deletado com sucesso!'}); 
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
