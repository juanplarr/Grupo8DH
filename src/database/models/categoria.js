module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define(
    "Categoria",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: DataTypes.STRING,
      estado: DataTypes.TINYINT,
    },
    {
      tableName: "categorias",
      timestamps: false,
    }
  );

  Categoria.associate = (models) => {
    Categoria.hasMany(models.Producto, {
      as: "Productos",
      foreignKey: "categoriaId",
    });
  };

  return Categoria;
};
