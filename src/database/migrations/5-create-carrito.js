module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("carrito", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      fechaCreacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("carrito");
  },
};
