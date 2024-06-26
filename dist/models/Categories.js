"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
var sequelize = require('../config/dataBase');
var Products = require('./Products');
var Categories = sequelize.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nameType: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  iconType: {
    type: DataTypes.STRING,
    allowNull: true
  }
});
Categories.sync();

//Categories.belongsTo(Products, { foreignKey: 'type' });
//Products.hasMany(Categories, { foreignKey: 'type' });

module.exports = Categories;