import UserModel from "../models/user.model";
import { generateToken } from "../utils/generateToken";

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
      const token = generateToken(user?.id!);
      return { user, token };
    } catch (err) {
      throw err;
    }
  }
}

export default AuthService;
