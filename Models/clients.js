"use strict"

const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Clients extends Model{}

    Clients.init({
        nome_cliente: DataTypes.STRING(45),
        altura_cliente: DataTypes.DECIMAL(3,2),
        peso_cliente: DataTypes.DECIMAL(3,1),
        data_nascimento: DataTypes.DATE,
        num_telefone: DataTypes.STRING(16),
        email_cliente: DataTypes.STRING(33)
    },
    {   sequelize,
        modelName:"clients",
        timestamps:false

    });
    return Clients
}