// == MODEL ==
// Um model é uma representação da tabela em um código javascript

const Sequelize = require("sequelize")
const connection  = require("./db")

/*define() passa como parametro o nome da tabela  e  um json contendo os as informações que serão
  passadas para a tabela */
const Pergunta = connection.define("tblPergunta", {
    titulo: {
        type: Sequelize.STRING, //texto curto
        allowNull: false //impede campo vazio (not null)
    },

    descricao: {
        type: Sequelize.TEXT, //texto  grande
        allowNull: false 
    }
})

//Cria a tabela caso ela não exista
Pergunta.sync({force: false}).then(()=> {
    console.log("Tabela criada.")
})


module.exports = Pergunta