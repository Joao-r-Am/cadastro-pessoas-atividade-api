import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";

const authService = new AuthService();

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { email, senha } = req.body;
  try {
    const { userReturn, token } = await authService.login(email, senha);

    if (!userReturn) {
      return res.status(401).json({ error: "usuário ou senha incorretos" });
    }
    req.headers["authorization"] = token;
    return res.status(200).json({ token, userReturn });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
