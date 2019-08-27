module.exports = app => {


    app.get('/ola', (req,res)=>{
        var param1 = req.requery.nome;
        var param2 = req.requery.sobrenome;

        res.send(`Olá ${param1} ${param2}`);
    })
}