module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define(
    "Producto",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: DataTypes.STRING,
      precio: DataTypes.FLOAT,
      detalle: DataTypes.STRING,
      precioCompra: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      urlImagen: DataTypes.STRING,
      estado: DataTypes.TINYINT,
      precioMay: DataTypes.INTEGER,
      categoriaId: DataTypes.INTEGER,
    },
    {
      tableName: "productos",
      timestamps: false,
    }
  );

  Producto.associate = (models) => {
    Producto.belongsTo(models.Categoria, {
      as: "Categoria",
      foreignKey: "categoriaId",
    });
    Producto.hasMany(models.ProductoCarrito, {
      as: "ProductosCarrito",
      foreignKey: "idProducto",
    });
  };

  return Producto;
};
