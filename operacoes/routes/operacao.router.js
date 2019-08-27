
module.exports = (app) => {
    app.get('/operacao/:tipooperacao', (req, res) => {
        var tipo = req.params.tipooperacao;
        var paramA = Number(req.query.valor1);
        var paramB = Number(req.query.valor2);
        var Result = 0;
        if (isNaN(paramA) || isNaN(paramB)) {
            res.status(400).send('Parâmetro Inválido');
        } else {
            if (tipo == 'somar') {
                Result = (paramA) + (paramB);
            } else if (tipo == 'subitrair') {
                Result = (paramA) - (paramB);
            } else if (tipo == 'multiplicar') {
                Result = (paramA) * (paramB);
            } else if (tipo == 'dividir') {
                if (paramA <= 0) {
                    res.status(400).send('Parâmetro 1 deve ser maior que zero');
                } else {
                    Result = (paramA) / (paramB);
                }

            } else if (tipo == 'regratres') {
                var valorX = paramA * 1;
                var valorY = paramB * 100;
                Result = (valorY) / (valorX);
            } else {
                res.status(404).send('Operação Invalída')   
            }


            res.send(`Result ${Result}`);
        }

    });
}

