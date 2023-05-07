const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require('path');

const app = express();

/* ------------------------------ Configurações ----------------------------- */
app.use(bodyParser.urlencoded({'extended': false}));
app.use(bodyParser.json());


/* ---------------------------------- Rotas --------------------------------- */
app.get('/', (request, response)=>{
    response.json({" mensagem": "Olá mundo!"});
});

app.post('/login', (req, res)=>{
    const {usuario, senha} =req.body;
    const filePath = path.join(__dirname, "data", "login.json");

    console.log(`Usuario: ${req.body.usuario}, Senha: ${req.body.senha}`);

    fs.readFile(filePath, "utf-8", (err, data)=>{
        if (err) {
            console.log(`Erro: ${err}`);
            return;
        }

        const usuarios = JSON.parse(data);
        const usuariosEncontrados = usuarios.find((user) => user.usuario === usuario && user.senha === senha);

        if (usuariosEncontrados == null) {
            return res.json({"erro":"Senha ou email errada"});
            
        }else{
            return res.json({"sucesso": "Login efetuado com sucesso!!"});

        }
    });

    // res.json({"usuario1": usuario, "senha1": senha});

})


app.listen(3002, ()=>{
    console.log("Servidor online na porta 3002");
})