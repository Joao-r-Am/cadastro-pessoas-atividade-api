import { Sequelize } from "sequelize";
import path from "path";

const sequelize = new Sequelize("usuarios-tarefas-db", "user", "pass", {
  dialect: "sqlite",
  storage: path.resolve(__dirname, "../../database.sqlite"), // Caminho do arquivo SQLite
  logging: false,
});

export default sequelize;
