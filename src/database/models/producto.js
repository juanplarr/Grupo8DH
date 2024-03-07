const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Producto = sequelize.define('Producto', {
    nombre_producto: DataTypes.STRING,
    precio_un_producto: DataTypes.FLOAT,
    detalle_producto: DataTypes.STRING,
    precio_compra_producto: DataTypes.FLOAT,
    stock_producto: DataTypes.INTEGER,
    url_imagen_producto: DataTypes.STRING,
    estado_producto: DataTypes.TINYINT,
    precio_may_producto: DataTypes.INTEGER,
  });

  return Producto;
};
