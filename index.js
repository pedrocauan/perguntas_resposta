const express = require("express")

const app = express()

//Config
    //View Engine
    app.set("viewengine", "ejs") //acess o diretorio views
    //Permite aplicação de arquivos css, javascript e imagem na pasta criada (public)
    app.use(express.static("public"))


app.get("/", function(req,res) {
    res.render("index.ejs")
})

app.get("/perguntar", function(req, res){
    res.render("perguntar.ejs")
})

//Rotas do tipo post normalmente sao utilizadas para pegar dados de um formulário
app.post("/salvarpergunta", function(req, res) {
    res.send("Formulário enviado com sucesso !!")
})

app.listen(8084, (err) => {
    console.log("Rodou. Porta 8084")
})