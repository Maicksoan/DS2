const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

//criar aplicação express
const app = express();

//Adiciona o body parser na aplicação
app.use(bodyParser.json());
//adiciona o arquivo de mapeamento de rota
app.use(routes);

const appServer = app.listen(3000, () => {
    console.log('Aplicação esta rodando na porta %s', appServer.address().port);
});