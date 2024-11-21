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
    const { user, token } = await authService.login(email, senha);

    if (!user) {
      return res.status(401).json({ error: "usuário ou senha incorretos" });
    }
    req.headers["authorization"] = token;
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ error: "erro ao realizar login." });
  }
};
