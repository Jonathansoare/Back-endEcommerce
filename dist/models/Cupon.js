"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
var sequelize = require('../config/dataBase');
var Cupons = sequelize.define('cupons', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  NameCupon: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ValorDesconto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  DataValidade: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});
Cupons.sync();
module.exports = Cupons;