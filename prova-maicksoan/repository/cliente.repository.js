const connection = require('../mysql-connection');

const query = 'SELECT c.id AS cliente_id,c.codigo AS cliente_codigo,c.nome AS cliente_nome,c.email AS cliente_email,c.cidade_id AS cidade_id, c.tabelapreco_id AS tabelapreco,' +
    'ci.id AS cidade_id, ci.nome AS cidade_nome, ci.estado_id AS cidade_estado_id,' +
    'tb.id as tabela_id, tb.codigo AS tabela_codigo,tb.nome AS tabela_nome,tb.fator AS tabela_fator' +
    'JOIN cidade ci ON c.cidade_id = ci.id ' +
    'JOIN tabelapreco tb ON c.tabelapreco_id = tb.id';

module.exports = {

    find: (callback) => {
        connection.query(query, callback);
    },

    findById: (params, callback) => {
        connection.query('SELECT * FROM cliente WHERE ID = ?', [params.id], callback);
    },

    create: (params, callback) => {
        connection.query('INSERT INTO cliente (codigo,nome,email) VALUES(?,?,?)', [params.codigo,
        params.nome, params.email], callback);

    },

    update: (params, callback) => {
        connection.query('UPDATE cliente SET codigo = ?, nome = ?, email = ? WHERE id = ?', [params.codigo,
        params.nome, params.email, params.id], callback);

    },
    delete: (params, callback) => {
        connection.query('DELETE  FROM cliente WHERE ID = ?', [params.id], callback);
    }
};