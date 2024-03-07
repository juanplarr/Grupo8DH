module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define(
    "Rol",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: DataTypes.STRING,
    },
    {
      tableName: "roles",
      timestamps: false,
    }
  );

  Rol.associate = (models) => {
    Rol.hasMany(models.Usuario, {
      as: "Usuarios",
      foreignKey: "rolId",
    });
  };

  return Rol;
};
