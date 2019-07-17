var pg = require('pg');

var strconnect = "postgres://postgres:postgres@localhost/db";

pg.connect (strconnect, function(err, client, done){

    if(err){
        return console.error('Erro em conectar com o Banco de Dados', err);
    };
    client.query('SELECT $1::int AS number', ['1'], function (err, result){
        done();
        if (err){
            return console.error("Erro em executar a consulta", err);
        }
        console.log(result.rows[0].number);
    })
})
