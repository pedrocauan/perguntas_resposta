// == CONEXÃO COM O BANCO DE DADOS ==

const Sequelize = require("sequelize")

//Variavel que vai ser usada pra linkar a database
const connection = new Sequelize("guia_pergunta", "philia", "1234", {
    host: "localhost",
    dialect: "mysql",
})

module.exports = connection //Faz a database poder ser usada em outros lugares
