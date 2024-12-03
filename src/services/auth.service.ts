import UserModel from "../models/user.model";
import { generateToken } from "../utils/generateToken";

interface UserReturn {
  id: string;
  nome: string;
  telefone: number;
  email: string;
}

class AuthService {
  async login(email: string, senha: string) {
    try {
      if (email.length < 1 || senha.length < 1) {
        throw { message: `verifique as informações.` };
      }
      const user = await UserModel.findOne({
        where: {
          email,
          senha,
        },
      });

      if (!user) {
        throw { error: "usuário ou senha incorretos" };
      }

      const userReturn: UserReturn = {
        id: user!.id,
        nome: user!.nome,
        telefone: user!.telefone,
        email: user!.email,
      };
      const token = generateToken(user?.id!);
      return { userReturn, token };
    } catch (err) {
      throw err;
    }
  }
}

export default AuthService;
