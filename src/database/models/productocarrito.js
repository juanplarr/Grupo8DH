const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ProductoCarrito = sequelize.define('ProductoCarrito', {
    cantidad: DataTypes.INTEGER,
  });

  ProductoCarrito.belongsTo(sequelize.models.Carrito, { foreignKey: 'id_carrito' });
  ProductoCarrito.belongsTo(sequelize.models.Producto, { foreignKey: 'id_producto' });

  return ProductoCarrito;
};
