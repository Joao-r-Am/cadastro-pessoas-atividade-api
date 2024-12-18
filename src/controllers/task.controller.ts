import { Request, Response, NextFunction } from "express";
import TaskModel from "../models/task.model";
import UserService from "../services/user.service";
import TaskService from "../services/task.service";

const taskService = new TaskService();

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const task = req.body;
    await taskService.createTask(task, task.userId);
    res.status(201).json({ message: "atividade criado com sucesso!", task });
  } catch (err: any) {
    res.status(400).json({ error: err });
    next(err);
  }
};

export const getAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const userId = req.url.slice(1);
  try {
    const tasks = await taskService.getAllTasks(userId);
    res.status(200).json({ tasks });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
    next(err);
  }
};
