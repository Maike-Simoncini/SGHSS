const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const LogAuditoria = sequelize.define('LogAuditoria', {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  acao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  data_hora: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'logs_auditoria',
  timestamps: false,
});

module.exports = LogAuditoria;