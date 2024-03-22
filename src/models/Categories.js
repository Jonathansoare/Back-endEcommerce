const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');
const Products = require('./Products');

const Categories = sequelize.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nameType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    iconType: {
        type: DataTypes.STRING,
        allowNull: true
    }
});
Categories.belongsTo(Products, { foreignKey: 'type' });
Products.hasMany(Categories, { foreignKey: 'type' });
Categories.sync() 

module.exports = Categories;
