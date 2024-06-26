const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');

const Pedido = sequelize.define('Pedido', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  produto_nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  preco_unitario: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  total_produto: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  preco_medio_produto: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  data_pedido: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'pedidos',
  timestamps: false
});

module.exports = Pedido;
