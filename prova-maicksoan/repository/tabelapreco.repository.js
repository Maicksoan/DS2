const connection = require('../mysql-connection');

//const query = 'SELECT  tabelapreco.id AS tabela_id,tabelapreco.nome AS tabela_nome, tabelapreco.fator AS tabela_fator FROM tabelapreco ';

module.exports = {
    find: (callback) => {
        connection.query('SELECT * FROM tabelapreco', callback);
    },
    findById: (params, callback) => {
        connection.query('SELECT * FROM tabelapreco WHERE id = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO tabelapreco (codigo,nome,fator) VALUES (?,?,?)', [params.codigo, params.nome, params.fator], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE tabelapreco SET codigo = ?, nome = ?, fator = ? WHERE id = ?', [params.codigo, params.nome, params.fator, params.id], callback);
    },
    delete: (params, callback) => {
        connection.query('DELETE FROM tabelapreco WHERE id = ?', [params.id], callback);
    }
}
 