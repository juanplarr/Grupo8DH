module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("productos_carrito", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idCarrito: {
        type: Sequelize.INTEGER,
        references: {
          model: "carrito",
          key: "id",
        },
      },
      idProducto: {
        type: Sequelize.INTEGER,
        references: {
          model: "productos",
          key: "id",
        },
      },
      cantidad: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("productos_carrito");
  },
};
