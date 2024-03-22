"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
var sequelize = require('../config/dataBase');
var Log = sequelize.define('log', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  msg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  changedValue: {
    type: DataTypes.STRING,
    allowNull: true
  },
  changedField: {
    type: DataTypes.STRING,
    allowNull: true
  },
  changedItemId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  previousValue: {
    type: DataTypes.STRING,
    allowNull: true
  },
  actionPerformed: {
    type: DataTypes.STRING,
    allowNull: false
  },
  changeDate: {
    type: DataTypes.DATE,
    defaultValue: sequelize.NOW
  }
});
Log.sync();
module.exports = Log;