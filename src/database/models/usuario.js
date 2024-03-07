const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Usuario = sequelize.define('Usuario', {
    nombre_usuario: DataTypes.STRING,
    email_usuario: DataTypes.STRING,
    dni_usuario: DataTypes.INTEGER,
    contrasena_usuario: DataTypes.STRING,
    apellido_usuario: DataTypes.STRING,
  });

  Usuario.belongsTo(sequelize.models.Rol, { foreignKey: 'rol_id' });

  return Usuario;
};
