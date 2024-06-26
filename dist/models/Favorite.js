"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
var sequelize = require('../config/dataBase');
var Product = require('./Products'); // Importe o modelo Product

var Favorite = sequelize.define('Favorite', {
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
Favorite.sync();
Favorite.belongsTo(Product, {
  foreignKey: 'productId'
}); // Estabelece a relação belongsTo com o modelo Product

module.exports = Favorite;