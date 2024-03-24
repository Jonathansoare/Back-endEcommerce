const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');
const Products = require('./Products');

const Imagens = sequelize.define('imagens', {
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
        type: DataTypes.STRING(7000),
        allowNull: true
    }
});
Imagens.sync()
Imagens.belongsTo(Products, { foreignKey: 'productId' });
Products.hasMany(Imagens, { foreignKey: 'productId' })


module.exports = Imagens;
