import User, { InterfaceUser } from "../models/UserModel";

class UserRepository {
    async create(user: InterfaceUser): Promise<InterfaceUser> {
        const newUser = new User(user);
        return await newUser.save();
    } 
    
    async findAll(): Promise<InterfaceUser[]> {
        return await User.find();
    }
}

export default new UserRepository();