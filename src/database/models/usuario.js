module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: DataTypes.STRING,
      email: DataTypes.STRING,
      dni: DataTypes.INTEGER,
      contrasena: DataTypes.STRING,
      apellido: DataTypes.STRING,
      rolId: DataTypes.INTEGER,
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );

  Usuario.associate = (models) => {
    Usuario.belongsTo(models.Rol, {
      as: "Rol",
      foreignKey: "rolId",
    });
  };

  return Usuario;
};
