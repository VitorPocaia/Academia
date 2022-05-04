const Sequelize = require("sequelize")

const sequelize = new Sequelize("academia", "root", "senac", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate() // Verifique
.then(function(){ // Entao
    console.log("Conexão realizada com sucesso")
}).catch(function(){ //Senao
    console.log("Erro: Não foi possivel realizar a conexão")
});

module.exports = sequelize;