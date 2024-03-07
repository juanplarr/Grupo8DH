"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categorias",
      [
        { nombre: "Electrónicos", estado: 1 },
        { nombre: "Ropa", estado: 1 },
        { nombre: "Hogar", estado: 1 },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categorias", null, {});
  },
};
