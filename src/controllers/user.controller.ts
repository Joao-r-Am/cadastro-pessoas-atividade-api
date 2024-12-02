import { Request, Response, NextFunction } from "express";
import UserModel from "../models/user.model";
import UserService from "../services/user.service";
import { plainToClass } from "class-transformer";
import { CreateUserDto } from "../dto/user.dto";
import { json } from "body-parser";

const userService = new UserService();

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = req.body;
    await userService.createUser(user);
    res.status(201).json({ message: "usuário criado.", user: user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
    next(err);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await userService.findAllUsersService();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
    next(err);
  }
};

export const getOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await userService.findOneUser(id);
    res.status(200).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
    next(err);
  }
};
