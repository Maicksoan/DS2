const express = require('express');//Importa express
const consign = require('consign');
const bodyParser = require('body-parser');


const app = express();//instancia aplicação


//Adiciona o body-parser à aplicação para poder receber Json no body da requisição
app.use(bodyParser.json());

//Padrao
app.get('/', (req, res) => {
    res.send('Its Working!');
});


consign()
    .include('routes')
    .into(app);


app.listen(3000);//levanta aplicação  