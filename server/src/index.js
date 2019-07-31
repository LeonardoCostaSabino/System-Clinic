'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./Config/db.js');

db.sequelize.authenticate()
    .then(() =>{
      console.log('A conexão foi estabelecida com sucesso');
    })
    .catch(err =>{
      console.log('Não foi possivel de manter a conexão com o Banco de Dados', err);
    });

db.sequelize.sync({
  force: true
}).then(() => {
  console.log('Drop and Resync with {force: true}');
});

require('./Route/usuarios.route.js')(app);

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App Listening at http://%s:%s", host, port)
});