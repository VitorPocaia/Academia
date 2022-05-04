const { Sequelize } = require("sequelize")
const sequelize = require("../db/db");
const Clients = require("../Models/clients");


module.exports = {
    async getAll(req, res) {
        const sequelize = new Sequelize("academia", "root", "senac",{
            host: "localhost",
            dialect: "mysql"
        });
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(clients)
    }, 
    async create (req, res){
        const sequelize = new Sequelize 
        ("academia", "root", "senac",{
            host: "localhost",
            dialect: "mysql"
        });
        await Clients(sequelize, Sequelize.DataTypes).
        create({
            nome_cliente: req.body.nome_cliente,
            altura_cliente: req.body.altura_cliente,
            peso_cliente: req.body.peso_cliente,
            data_nascimento: req.body.data_nascimento,
            email_cliente: req.body.email_cliente,
            num_telefone: req.body.num_telefone
        })
        res.status(200).send({
            message: "Produto cadastrado com sucesso"
        })
    
    },
    async update (req, res){
        const sequelize = new Sequelize 
        ("academia", "root", "senac",{
            host: "localhost",
            dialect: "mysql"
        });
    
        await Clients(sequelize, Sequelize.DataTypes).update({
            nome_cliente: req.body.nome_cliente,
            altura_cliente: req.body.altura_cliente,
            peso_cliente: req.body.peso_cliente,
            data_nascimento: req.body.data_nascimento,
            email_cliente: req.body.email_cliente,
            num_telefone: req.body.num_telefone
        },
        {
            where: {id:req.params.id}
        }
        );
        res.status(200).send("Clients atualizado com Sucesso")
    },
    async delete (req, res){
        const sequelize = new Sequelize 
        ("academia", "root", "senac",{
            host: "localhost",
            dialect: "mysql"
        });
        await Clients(sequelize, Sequelize.DataTypes).destroy(
            {
                where: {Id: req.params.id}
            }
            );
            res.status(200).send("Produto excluido com Sucesso")
            }
    }