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
      validate: {
        notNull: { msg: "erro ao carregar dados de usuário." },
        len: {
          args: [2, 36],
          msg: "erro ao carregar dados de id do usuário.",
        },
      },
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "nome de tarefa inválido." },
        len: {
          args: [10, 50],
          msg: "tarefa deve ter pelo menos 10 caracteres.",
        },
      },
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "descrição inválida." },
        len: {
          args: [10, 99999],
          msg: "descrição deve ter pelo menos 10 caracteres.",
        },
      },
    },
    dataInicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.DATE,
      validate: {
        isDate: { msg: "data inválida", args: true },
        notNull: { msg: "insira uma data" },
      },
    },
    dataFim: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: { msg: "data inválida", args: true },
        notNull: { msg: "insira uma data" },
      },
    },
    dataCriacao: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: { msg: "data inválida", args: true },
        notNull: { msg: "insira uma data" },
      },
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
