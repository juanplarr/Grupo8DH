module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("usuarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      dni: {
        type: Sequelize.INTEGER,
      },
      contrasena: {
        type: Sequelize.STRING,
      },
      apellido: {
        type: Sequelize.STRING,
      },
      rolId: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id",
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("usuarios");
  },
};
