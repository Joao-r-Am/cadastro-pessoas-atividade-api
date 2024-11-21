import sequelize from "../config/config";
import UserModel from "./user.model";

const models = {
  UserModel,
};

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("conectado com sucesso.");
  } catch (error) {
    console.error("erro ao conectar:", error);
  }
};

export default models;
