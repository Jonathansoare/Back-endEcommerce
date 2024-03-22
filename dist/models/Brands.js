"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
var sequelize = require('../config/dataBase');
var Products = require('./Products');
var Brands = sequelize.define('brands', {
  BrandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nameBrand: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imageBrand: {
    type: DataTypes.STRING(7000),
    allowNull: true
  }
});
Brands.sync();
module.exports = Brands;