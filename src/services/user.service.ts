import { error } from "console";
import UserModel from "../models/user.model";

class UserService {
  async createUser(user: UserModel) {
    try {
      const newUser = await UserModel.create(user);
      return newUser;
    } catch (err: any) {
      throw err;
    }
  }
  async findOneUserService(userId: string) {
    try {
      const user = await UserModel.findAll({ where: { id: userId } });
      return user;
    } catch (err) {
      throw new Error(`erro ao procurar este usuário: ${err}`);
    }
  }
  async findAllUsersService() {
    try {
      const users = await UserModel.findAll();
      return users;
    } catch (err) {
      throw new Error(`erro ao buscar usuários: ${err}`);
    }
  }
  async findOneUser(userId: string) {
    try {
      const user = await UserModel.findOne({ where: { id: userId } });
      return user;
    } catch (err) {
      throw new Error(`erro ao procurar este usuário: ${err}`);
    }
  }
  async findUserByEmail(userEmail: string) {
    try {
      const email = await UserModel.findOne({ where: { email: userEmail } });
      return email;
    } catch (err) {
      throw new Error(`erro ao procurar este usuário: ${err}`);
    }
  }
}

export default UserService;
