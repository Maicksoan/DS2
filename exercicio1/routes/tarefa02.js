module.exports = (app) => {
    app.post('/tarefa02', (req, res) => {

        var sal = req.body.salario;
        var rel = req.body.reajuste;


        var result = sal + (sal * (rel / 100));

        res.json({
            sal: sal,
            rel: rel,
            result: result
        });
    });

}

