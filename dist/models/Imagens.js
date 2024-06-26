"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
var sequelize = require('../config/dataBase');
var Products = require('./Products');
var Imagens = sequelize.define('imagens', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING(11000),
    allowNull: true
  }
});
Imagens.sync();
Imagens.belongsTo(Products, {
  foreignKey: 'productId'
});
Products.hasMany(Imagens, {
  foreignKey: 'productId'
});
module.exports = Imagens;