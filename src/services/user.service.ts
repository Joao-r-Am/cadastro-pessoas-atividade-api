import UserModel from "../models/user.model";
import { encrypt } from "../utils/bcrypt";

interface NewUser {
  nome: string;
  senha: string;
  telefone: number;
  email: string;
  rua: string;
  numero: number;
  complemento: string | null;
  cidade: string;
}

class UserService {
  async createUser(user: NewUser) {
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
      const createUser: NewUser = {
        nome: user.nome,
        senha: (await encrypt(user.senha)).toString(),
        telefone: user.telefone,
        email: user.email,
        rua: user.rua,
        numero: user.numero,
        complemento: user.complemento,
        cidade: user.cidade,
      };
      return await UserModel.create(createUser);
    } catch (err) {
      console.log(err);
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
