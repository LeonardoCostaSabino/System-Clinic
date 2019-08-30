const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    // operatorsAliases: false,

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models/tables

db.acesso = require('../models/acesso.model')(sequelize, Sequelize);
db.cargos = require('../models/cargos.model')(sequelize, Sequelize);
db.usuarios = require('../models/usuarios.model')(sequelize, Sequelize);
db.telefone = require('../models/telefone.model')(sequelize, Sequelize);
db.enderecos = require('../models/endereco.model')(sequelize, Sequelize);
db.pessoa = require('../models/pessoas.model')(sequelize, Sequelize);
db.funcionario = require('../models/funcionarios.model')(sequelize, Sequelize);
db.pacientes = require('../models/pacientes.model')(sequelize, Sequelize);
db.consultas = require('../models/consultas.model')(sequelize, Sequelize);
db.protuarios = require('../models/prontuarios.model')(sequelize, Sequelize);
db.contatos = require('../models/contato.model')(sequelize, Sequelize);

//Relations

db.pessoa.belongsTo(db.usuarios, {foreignKey: 'usuario_id'}); //1:1
db.pessoa.belongsTo(db.enderecos, {foreignKey: 'endereco_id'}); //1:1
db.pessoa.belongsTo(db.telefone, {foreignKey: 'telefone_id'}); //1/1

db.funcionario.belongsTo(db.pessoa, {foreignKey: 'pessoas_id'}); //1:1

db.pacientes.belongsTo(db.pessoa, {foreignKey: 'pessoas_id'}); //1:1

db.protuarios.belongsTo(db.pacientes, {foreignKey: 'paciente_id'}); //1:1
db.protuarios.belongsTo(db.funcionario, {foreignKey: 'funcionario_id'}); //1:1
db.consultas.hasMany(db.protuarios, {constrains: false, foreignKey: 'consultas_id'}); //1:N

db.consultas.belongsTo(db.pacientes, {foreignKey: 'paciente_id'}); //1:1
db.consultas.belongsTo(db.funcionario, {foreignKey: 'funcionario_id'}); //1:1

module.exports = db;