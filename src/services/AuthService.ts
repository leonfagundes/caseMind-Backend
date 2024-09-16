import { userRepository } from './UserService';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export class AuthService {
    // Método de login agora retorna token e informações do usuário
    static async login(email: string, password: string) {
        const user = await userRepository.findOneBy({ email });

        if (!user) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return null;
        }

        // Gerar token com o ID do usuário e email
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: "1h", 
        });

        // Retornar token e informações do usuário
        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                photo: user.photo || null,  // Se o usuário tiver uma foto, inclua aqui
            }
        };
    }

    // Função para buscar o usuário pelo email
    static async getUserByEmail(email: string) {
        return await userRepository.findOneBy({ email });
    }

    static async verifyToken(token: string) {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (error) {
            return null;
        }
    }
}
