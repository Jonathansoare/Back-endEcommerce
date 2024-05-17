const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');

const Products = sequelize.define('products',{
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    BrandName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    price:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    description:{
        type:DataTypes.STRING((11000)),
        allowNull:false
    },
    quantityInStock:{
        type:DataTypes.STRING,
        allowNull:false
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    rating:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

Products.sync()

module.exports = Products