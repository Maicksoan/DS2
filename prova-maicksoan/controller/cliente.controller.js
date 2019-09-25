const repository = require('../repository/cidade.repository');

module.exports = {
    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            const clientes = [];

            for (item of result) {

                //Converte de RELACIONAL para OBJETO
                let clientes = {
                    id: c.id,
                    codigo: c.codigo,
                    nome: c.nome,
                    email: c.email,
                    tabelapreco = {
                        id: tb.tabela_id,
                        codigo: tb.codigo_codigo,
                        nome: tb.tabela_nome,
                        fator: tb.tabela_fator

                    }
                }

                clientes.push(cliente);
            }

            res.send(clientes);
        });

    },
    create: (req, res) => {

        //Converter de OBJETO para RELACIONAL
        const cidade = {
            nome: req.body.nome,
            estado_id: req.body.estado.id
        }

        repository.create(cidade, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            res.send(result);
        });
    },
    findById: (req, res) => {

        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            //Valida se o id existe no banco
            if (!result[0]) {
                res.status(404).send('not found');
            }

            res.send(result[0]);
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
    delete: (req, res) => {
        repository.delete(req.params).then(result => {
            res.send(result[0]);
        }).catch(error => {
            res.status(500).send(error);
        });
    }
}