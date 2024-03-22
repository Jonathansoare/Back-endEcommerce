const { DataTypes } = require('sequelize');
const sequelize = require('../config/dataBase');

const Cupons = sequelize.define('cupons',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    NameCupon:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ValorDesconto:{
        type:DataTypes.STRING,
        allowNull:false
    },
    DataValidade:{
        type: DataTypes.DATEONLY,
        allowNull:false
    }
})

Cupons.sync()

module.exports = Cupons