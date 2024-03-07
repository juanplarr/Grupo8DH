module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("productos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      precio: {
        type: Sequelize.FLOAT,
      },
      detalle: {
        type: Sequelize.STRING,
      },
      precioCompra: {
        type: Sequelize.FLOAT,
      },
      stock: {
        type: Sequelize.INTEGER,
      },
      urlImagen: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.TINYINT,
      },
      precioMay: {
        type: Sequelize.INTEGER,
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "categorias",
          key: "id",
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("productos");
  },
};
