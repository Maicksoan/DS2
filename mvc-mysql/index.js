const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const connection = require ('./mysql-connection');

//criar aplicação express
const app = express();

//Adiciona o body parser na aplicação
app.use(bodyParser.json());
//adiciona o arquivo de mapeamento de rota
app.use(routes);
//Tenta conectar com o banco de dados
connection.connect((error)=>{
    if (error){
        console.error('Deu pau:%s', error.message);
        return;
    }
    const appServer = app.listen(3000, () => {
        console.log('Aplicação esta rodando na porta %s', appServer.address().port);
    });
})

