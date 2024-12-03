import TaskModel from "../models/task.model";
import UserService from "./user.service";

const userService = new UserService();

class TaskService {
  async createTask(task: TaskModel, userId: string) {
    try {
      if (!task && !userId) {
        throw { message: "erro ao cadastrar" };
      }
      const newTask = await TaskModel.create(task);
      return newTask;
    } catch (err: any) {
      throw err.errors[0].message;
    }
  }

  async getAllTasks(userId: string) {
    try {
      const checkUser = await userService.findOneUserService(userId);

      if (!userId || !checkUser) {
        throw { error: "usuário inválido." };
      }
      if (!userId) {
        throw { message: "erro ao carregar dados do usuário." };
      }
      const tasks = await TaskModel.findAll({
        where: {
          userId,
        },
      });

      if (!tasks) {
        throw { error: "tarefas não encontradas." };
      }

      if (tasks.length < 1) {
        throw { message: "não há tarefas." };
      }

      return tasks;
    } catch (err: any) {
      throw err.errors[0].message;
    }
  }
}

export default TaskService;
