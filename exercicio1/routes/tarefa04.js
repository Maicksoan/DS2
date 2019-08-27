module.exports = (app) => {
    app.get('/tarefa04', (req, res) => {
        var paramA = Number(req.query.valor1);

        if (paramA >= 0){

            res.send(`O numero ${paramA} é positivo`);
        }else{

            res.send(`O numero  ${paramA} é negativo`);
        }
    
    });
}

