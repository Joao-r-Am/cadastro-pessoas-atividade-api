import TaskModel from "../models/task.model";

class TaskService {
  async createTask(task: TaskModel, userId: string) {
    try {
      if (!task || !userId) {
        throw new Error(`erro ao criar atividade.`);
      }
      const taskCreated = await TaskModel.create(task);
      return taskCreated;
    } catch (err) {
      throw new Error(`erro ao criar usuario: ${err}`);
    }
  }

  async getAllTasks(userId: string) {
    try {
      if (!userId) {
        throw new Error(`erro ao buscar as atividades.`);
      }
      const tasks = await TaskModel.findAll({
        where: {
          userId,
        },
      });

      return tasks;
    } catch (err) {
      throw new Error(`erro ao criar usuario: ${err}`);
    }
  }
}

export default TaskService;
