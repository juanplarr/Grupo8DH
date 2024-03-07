const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Categoria = sequelize.define('Categoria', {
    nombre_categoria: DataTypes.STRING,
    estado_categoria: DataTypes.TINYINT,
  });

  return Categoria;
};
