'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tasks.init({
    taskId: DataTypes.STRING,
    userId: DataTypes.STRING,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    dataCriacao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tasks',
  });
  return tasks;
};