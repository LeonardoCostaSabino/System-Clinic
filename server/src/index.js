'use strict';
var cors = require('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./Route/usuarios.route.js')(app);
require('./Route/acesso.route')(app);
require('./Route/cargos.route')(app);
require('./Route/consultas.route')(app);
require('./Route/endereco.route')(app);
require('./Route/funcionarios.route')(app);
require('./Route/pacientes.route')(app);
require('./Route/pessoas.route')(app);
require('./Route/prontuarios.route')(app);
require('./Route/telefone.route')(app);

const db = require('./Config/db.js');

app.use(cors());

db.sequelize.authenticate()
    .then(() =>{
        console.log('A conexão foi estabelecida com sucesso');
    })
    .catch(err =>{
        console.log('Não foi possivel de manter a conexão com o Banco de Dados', err);
    });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function (req, res) {
    res.send('Bem Vindo a API System Clinic');
});

app.use(express.static('public'));
app.use('/static', express.static(__dirname +'public'));


app.use(function (req,res,next) {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

var AtualizarDB = false;

if (AtualizarDB) {
    db.sequelize.sync({
        force: true
    }).then(() => {
        console.log('Drop and Resync with {force: true}');
    });
}

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("App Listening at http://%s:%s", host, port)
});