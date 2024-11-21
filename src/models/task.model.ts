import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../config/config";
import UserModel from "./user.model";

class TaskModel extends Model<
  InferAttributes<TaskModel>,
  InferCreationAttributes<TaskModel>
> {
  declare taskId: string;
  declare userId: string;
  declare nome: string;
  declare descricao: string;
  declare dataInicio: Date;
  declare dataFim: Date;
  declare dataCriacao: Date;
}

TaskModel.init(
  {
    taskId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true,
      primaryKey: true,
      autoIncrementIdentity: true,
    },
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataInicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.DATE,
    },
    dataFim: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dataCriacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Task",
    tableName: "tasks",
    timestamps: true,
  }
);

TaskModel.belongsTo(UserModel);

export default TaskModel;
