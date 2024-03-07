module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("roles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("roles");
  },
};
