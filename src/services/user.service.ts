import { error } from "console";
import UserModel from "../models/user.model";
import { CreateUserDto } from "../dto/user.dto";
import { Optional } from "sequelize";

class UserService {
  async createUser(user: UserModel) {
    try {
      const checkEmail = await this.findUserByEmail(user.email);
      if (checkEmail) {
        throw {
          message: "email já cadastrado.",
        };
      }
      if (!user) {
        throw {
          message: "cheque as informações.",
        };
      }
      const newUser = await UserModel.create(user);
      return newUser;
    } catch (err) {
      throw err;
    }
  }

  async findAllUsersService() {
    try {
      const users = await UserModel.findAll();
      if (users.length < 1) {
        throw {
          message: "erro ao carregar dados.",
        };
      }
      return users;
    } catch (err) {
      throw err;
    }
  }

  async findOneUserService(userId: string) {
    try {
      const user = await UserModel.findAll({ where: { id: userId } });
      if (!user) {
        throw {
          message: "erro ao carregar dados.",
        };
      }
      return user;
    } catch (err) {
      throw err;
    }
  }

  async findOneUser(userId: string) {
    try {
      const user = await UserModel.findOne({ where: { id: userId } });
      if (!user) {
        throw {
          message: "erro ao carregar dados.",
        };
      }
      return user;
    } catch (err) {
      throw err;
    }
  }

  async findUserByEmail(userEmail: string): Promise<boolean> {
    try {
      const email = await UserModel.findOne({ where: { email: userEmail } });
      if (email) {
        throw {
          message: "email ja cadastrado.",
        };
      }
      return false;
    } catch (err) {
      throw err;
    }
  }
}

export default UserService;
