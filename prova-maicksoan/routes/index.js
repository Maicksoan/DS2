const express = require('express');
const tabelaprecoRoute = require('./tabelapreco.router');
const clienteRoute = require('./cliente.router');
const cidadeRoute = require('./cidade.router');
const routes = new express.Router();
routes.use('/cidades', cidadeRoute);
routes.use('/clientes', clienteRoute);
routes.use('/tabelaprecos', tabelaprecoRoute);


module.exports = routes;