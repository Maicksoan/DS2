module.exports = (app) => {
    app.post('/tarefa01', (req, res) => {

        var cf = req.body.custofabrica;
        var pd = req.body.distribuidor;
        var pi = req.body.imposto;

        var custoFinal = cf + ((cf / 100) * pd) + ((cf / 100) * pi);

        res.json({
            custofabrica: cf,
            distribuidor: pd,
            imposto: pi,
            custoFinal: custoFinal
        });
    });

}

