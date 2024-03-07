module.exports = (sequelize, DataTypes) => {
  const ProductoCarrito = sequelize.define(
    "ProductoCarrito",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idCarrito: DataTypes.INTEGER,
      idProducto: DataTypes.INTEGER,
      cantidad: DataTypes.INTEGER,
    },
    {
      tableName: "productos_carrito",
      timestamps: false,
    }
  );

  ProductoCarrito.associate = (models) => {
    ProductoCarrito.belongsTo(models.Carrito, {
      as: "Carrito",
      foreignKey: "idCarrito",
    });
    ProductoCarrito.belongsTo(models.Producto, {
      as: "Producto",
      foreignKey: "idProducto",
    });
  };

  return ProductoCarrito;
};
