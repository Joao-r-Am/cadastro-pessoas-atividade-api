import sequelize from "./config";
import UserModel from "../models/user.model";

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();
