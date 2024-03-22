const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');
const Product = require('./Products'); // Importe o modelo Product

const Favorite = sequelize.define('Favorite', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Favorite.belongsTo(Product, { foreignKey: 'productId' }); // Estabelece a relação belongsTo com o modelo Product
Favorite.sync();

module.exports = Favorite;