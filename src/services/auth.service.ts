import UserModel from "../models/user.model";
import { generateToken } from "../utils/generateToken";

class AuthService {
  async login(email: string, senha: string) {
    try {
      if (!email || !senha) throw new Error(`verifique as informações.`);
      const user = await UserModel.findOne({
        where: {
          email,
          senha,
        },
      });
      const token = generateToken(user?.id!);
      return { user, token };
    } catch (err) {
      throw new Error(`erro ao criar usuario: ${err}`);
    }
  }
}

export default AuthService;
