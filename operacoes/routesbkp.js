const express = require('express');
const routes = new express.Router();



module.exports = routes;//exportando rotas já existentes
routes.get('/somar', (req, res) => {

    var paramA = Number(req.query.valor1);//parametro para aparecer
    var paramB = Number(req.query.valor2);

    if (isNaN(paramA) || isNaN(paramB)) {
        res.status(400).send('Parâmetro Inválido');
    } else {
        var Result = (paramA) + (paramB);

        res.send(`Result ${Result}`);
    }


});

routes.get('/subritar', (req, res) => {

    var paramA = Number(req.query.valor1);//parametro para aparecer
    var paramB = Number(req.query.valor2);

    if (isNaN(paramA) || isNaN(paramB)) {
        res.status(400).send('Parâmetro Inválido');
    } else {
        var Result = (paramA) - (paramB);

        res.send(`Result ${Result}`);
    }


});
routes.get('/multiplicar', (req, res) => {

    var paramA = Number(req.query.valor1);//parametro para aparecer
    var paramB = Number(req.query.valor2);

    if (isNaN(paramA) || isNaN(paramB)) {
        res.status(400).send('Parâmetro Inválido');
    } else {
        var Result = (paramA) * (paramB);

        res.send(`Result ${Result}`);
    }


});
routes.get('/dividir', (req, res) => {

    var paramA = Number(req.query.valor1);//parametro para aparecer
    var paramB = Number(req.query.valor2);

    if (isNaN(paramA) || isNaN(paramB)) {
        res.status(400).send('Parâmetro Inválido');
    } else {
        if (paramA <= 0) {
            res.status(400).send('Parâmetro 1 deve ser maior que zero');
        } else if ((paramB <= 0)) {
            res.status(400).send('Parâmetro 2 deve ser maior que zero');
        }

        else {
            var Result = (paramA) / (paramB);

            res.send(`Result ${Result}`);
        }

    }


});
routes.get('/regratres', (req, res) => {

    var paramA = Number(req.query.valor1);//parametro para aparecer
    var paramB = Number(req.query.valor2);

    if (isNaN(paramA) || isNaN(paramB)) {
        res.status(400).send('Parâmetro Inválido');
    } else {
        var valorX = paramA * 1;
        var valorY = paramB * 100;
        var result = (valorY) / (valorX);
        res.send(`Result ${result}`);
    }

});
