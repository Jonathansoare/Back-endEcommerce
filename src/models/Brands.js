const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');
const Products = require('./Products');

const Brands = sequelize.define('brands', {
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

Brands.sync()

module.exports = Brands;

