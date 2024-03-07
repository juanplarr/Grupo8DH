"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "roles",
      [{ nombre: "Admin" }, { nombre: "Usuario" }, { nombre: "Invitado" }],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
