"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        id: "ddcd79d5-e951-45cf-ac02-b852b7cd688a",
        nome: "user",
        senha: "123456",
        telefone: "41999999999",
        email: "user@email.com",
        rua: "rua xxx",
        numero: 100,
        complemento: "em frente ao mercado",
        cidade: "campo largo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
