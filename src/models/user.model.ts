import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../config/config";
import TaskModel from "./task.model";

class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  declare id: string | null;
  declare nome: string;
  declare senha: string;
  declare telefone: number;
  declare email: string;
  declare rua: string;
  declare numero: number;
  declare complemento: string | null;
  declare cidade: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true,
      primaryKey: true,
      autoIncrementIdentity: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "nome de usuário inválido." },
        len: { args: [3, 50], msg: "nome deve ter pelo menos 3 caracteres." },
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "senha inválida." },
        len: { args: [6, 99], msg: "senha deve ter pelo menos 6 caracteres." },
      },
    },
    telefone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notNull: { msg: "telefone inválido." },
        len: {
          args: [9, 12],
          msg: "telefone deve ter pelo menos 9 caracteres.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "formato de email inválido." },
      },
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "rua inválida." },
        len: { args: [3, 50], msg: "rua deve ter pelo menos 3 caracteres." },
      },
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "numero inválido." },
      },
    },
    complemento: {
      type: DataTypes.STRING,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "cidade inválida." },
        len: { args: [2, 50], msg: "rua deve ter pelo menos 3 caracteres." },
      },
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  }
);

export default UserModel;
