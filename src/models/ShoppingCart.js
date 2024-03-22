const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');


const ShoppingCart = sequelize.define('ShoppingCart', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
});

ShoppingCart.sync()
module.exports = ShoppingCart 