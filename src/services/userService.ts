import AppDataSource from "../data-source";
import { User } from "../entities/User";
import * as bcrypt from "bcrypt";

export const userRepository = AppDataSource.getRepository(User);

export class UserService {
    static async getAll() {
        return await userRepository.find({ relations: ['createdTasks'] });
      }

    static async getById(id: string) {
        return await userRepository.findOneBy({ id: Number(id) });
    }

    static async create(name: string, email: string, password: string, photo?: Buffer) {

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = userRepository.create({
            name,
            email,
            password: hashedPassword,
            photo
        });

        return await userRepository.save(user);
    }

    static async update(id: string, { name, email, password, photo }: Partial<User>) {
        const user = await userRepository.findOneBy({ id: Number(id) });
        if (!user) return null;

        user.name = name ?? user.name;
        user.email = email ?? user.email;
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }
        user.photo = photo ?? user.photo;

        return await userRepository.save(user);
    }

    static async delete(id: string) {
        const user = await userRepository.findOneBy({ id: Number(id) });
        if (!user) return null;

        await userRepository.remove(user);
        return true;
    }
}
