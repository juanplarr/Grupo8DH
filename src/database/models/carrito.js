const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Carrito = sequelize.define('Carrito', {
    fecha_creacion: DataTypes.DATE,
  });

  Carrito.belongsTo(sequelize.models.Usuario, { foreignKey: 'id_usuario' });

  return Carrito;
};
