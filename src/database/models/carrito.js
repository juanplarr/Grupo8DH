module.exports = (sequelize, DataTypes) => {
  const Carrito = sequelize.define(
    "Carrito",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idUsuario: DataTypes.INTEGER,
      fechaCreacion: DataTypes.DATE,
    },
    {
      tableName: "carrito",
      timestamps: false,
    }
  );

  Carrito.associate = (models) => {
    Carrito.belongsTo(models.Usuario, {
      as: "Usuario",
      foreignKey: "idUsuario",
    });
    Carrito.hasMany(models.ProductoCarrito, {
      as: "ProductosCarrito",
      foreignKey: "idCarrito",
    });
  };

  return Carrito;
};
