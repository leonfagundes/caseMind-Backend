import { userRepository } from './UserService';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export class AuthService {
    static async login(email: string, password: string) {
        const user = await userRepository.findOneBy({ email });

        if (!user) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return null;
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: "1h", 
        });

        return token;
    }

    static async verifyToken(token: string) {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (error) {
            return null;
        }
    }
}
