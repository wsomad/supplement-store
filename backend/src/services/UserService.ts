import { InterfaceUser } from "../models/UserModel";
import UserRepository from "../repositories/UserRepository";

class UserService {
    async createUser(user: InterfaceUser): Promise<InterfaceUser> {
        return await UserRepository.create(user);
    }

    async getAllUsers(): Promise<InterfaceUser[]> {
        return await UserRepository.findAll();
    }
}

export default new UserService();