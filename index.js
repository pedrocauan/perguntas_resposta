const express = require("express")
const app = express()
const bodyParser = require("body-parser") //traduz os dados do form para uma estrutura javascript que pode ser usada no backend
const connection = require("./database/db")
const modelPergunta = require("./database/Pergunta")
let qntPergunta = 0; //Quantidade de perguntas enviadas pelo usuario

//database
    connection
    .authenticate()
    .then(() =>{
        console.log("Conectou a database")
    })
    .catch((err)=> {
        console.log(err)
    })

//Config
    //View Engine
        app.set("viewengine", "ejs") //acess o diretorio views
        //Permite aplicação de arquivos css, javascript e imagem na pasta criada (public)
        app.use(express.static("public"))

    //BodyParser
        //Traduz os dados do front em uma estrutura javascript manipulavel
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())

//Rotas
app.get("/", function(req,res) {
    res.render("index.ejs")
})

app.get("/perguntar", function(req, res){
    res.render("perguntar.ejs")
})

/*Rotas do tipo post normalmente sao utilizadas para pegar dados de um formulário*/
app.post("/salvarpergunta", function(req, res) {
    qntPergunta++
    let titulo = req.body.title
    let desc = req.body.desc
    console.log(`Pergunta${qntPergunta}: ${titulo}`)
    console.log(`Descricao: ${desc}`)
    res.send("Formulário enviado com sucesso !!")
})

app.listen(8084, (err) => {
    console.log("Rodou. Porta 8084")
})