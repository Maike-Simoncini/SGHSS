const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Consulta = sequelize.define('Consulta', {
  paciente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profissional_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_hora: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Agendada',
  },
}, {
  tableName: 'consultas',
  timestamps: true,
});

module.exports = Consulta;