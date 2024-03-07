module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("categorias", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.TINYINT,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("categorias");
  },
};
