const repository = require('../repository/estado.repository');
const estado = [];

module.exports = {

    find: (req, res) => {

        repository.find().then(result => {
            res.send(result);
        }).catch(error => {
            res.status(500).send(error);
        });
    },

    findByID: (req, res) => {

        repository.findById(req.params).then(result => {
            if (!result[0]) {
                res.status(404).send('not found');
            } else {
                res.send(result[0]);
            }
        }).catch(error => {
            res.status(500).send(error);
        });
    },

    create: (req, res) => {
        repository.create(req.body).then(result => {
            req.body.id = result[0];
            res.send(req.body);
        }).catch(error => {
            res.status(500).send(error)
        });

    },

    update: (req, res) => {
        //Atualiza o id do objeto do req.body
        repository.update(req.body).then(result => {
            if (result.affectedRows == 0) {
                res.status(404).send('not found');
            } else {
                res.send(result[0]);
            }

        }).catch(error => {
            res.status(500).send(error)
        });

    },
    delete: (req,res) => {
        repository.delete(req.params).then(result => {

            if (!result[0]) {
                res.status(404).send('not found');
            } else {
                res.send(result[0]);
            }

        }).catch(error => {
            res.status(500).send(error);
        });
    }
}