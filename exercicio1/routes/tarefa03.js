module.exports = (app) => {
    app.get('/tarefa03', (req, res) => {
        var paramA = Number(req.query.valor1);

        if (paramA % 2 == 0){

            res.send(`O numero ${paramA} é par`);
        }else{

            res.send(`O numero  ${paramA} é impar`);
        }
    
    });
}

