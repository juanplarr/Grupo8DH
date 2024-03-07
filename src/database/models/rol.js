const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Rol = sequelize.define('Rol', {
    nombre_rol: DataTypes.STRING,
  },
  {
    tableName: "roles"
  }
  );

  return Rol;
};
