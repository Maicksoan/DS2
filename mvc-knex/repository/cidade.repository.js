const knex = require('../mysql-connection');

//const query = 'SELECT c.id AS cidade_id, c.nome AS cidade_nome, ' +
//'e.id AS estado_id, e.nome AS estado_nome, e.sigla AS estado_sigla ' +
// 'FROM cidade c ' +
// 'INNER JOIN estado e ON e.id = c.estado_id ';

//knex.from('cidade').innerJoin('estado', 'cidade.id', 'cidade.nome', 'estado.id', 'estado.nome', 'estado.sigla');

// return knex.select().from('cidade').innerJoin('estado').on('estado.id = cidade.estado_id');

module.exports = {
    find: () => {
        return knex.select('c.id as cidade_id', 'c.nome as cidade_nome', 'e.id as estado_id', 'e.nome as estado_nome', 'e.sigla as estado_sigla').from('cidade as c').innerJoin('estado as e', 'e.id', 'c.estado_id');

    },
    findById: (params) => {
        return knex.select('c.id as cidade_id', 'c.nome as cidade_nome', 'e.id as estado_id', 'e.nome as estado_nome', 'e.sigla as estado_sigla')
            .from('cidade as c').innerJoin('estado as e', 'e.id', 'c.estado_id')
            .where({ id: params.id });
    },
    create: (params) => {
        return knex.insert('c.nome as cidade_nome', 'e.id as estado_id')
            .from('cidade as c')
            .innerJoin('estado as e', 'e.id', 'c.estado_id')
            .into('cidade')

        // return knex.insert(params.nome, params.estado_id).into('cidade');
    },
    update: (params) => {
        return knex('cidade').update(params.nome, params.estado_id, params.id).where({ id: params.id });
    },
    delete: (params) => {
        return knex('cidade').del().where({ id: params.id });
    }
}