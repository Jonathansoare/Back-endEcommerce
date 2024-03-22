"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
var sequelize = require('../config/dataBase');
var Permission = sequelize.define('Permission', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  // Defina campos para representar as permissões, como canRead, canWrite, canDelete, etc.
  canRead: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  canWrite: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  canDelete: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});
module.exports = Permission;