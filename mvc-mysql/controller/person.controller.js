const repository = require('../repository/person.repository')
const persons = [];


module.exports = {
    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            console.log(result);
            res.send(result);
        });



    },
    create: (req, res) => {
        console.log(req);

        repository.create(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            console.log(result);
            res.send(result);

        })
    },
    findById: (req, res) => {

        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            if(!result[0]){
                res.status(404).send('Not Found');
            }
            res.send(result[0]);
        });

    },
    update: (req, res) => {
        //atualiza o id do objeto do req.body
        req.body.id = req.params.id;

        repository.update(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            if(result.affectedRows == 0){
                
                res.status(404).send('Not Found');
            }
            console.log(result);
            res.send(result);

        })
    },
    delete: (req, res) => {
        repository.delete(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            res.status(204).send();
        });

    }
}