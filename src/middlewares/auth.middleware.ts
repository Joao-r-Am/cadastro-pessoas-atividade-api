import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = "1001";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    next();
    return decoded;
  } catch (error) {
    return res.status(401).json({ error: "Token inválido." });
  }
};
