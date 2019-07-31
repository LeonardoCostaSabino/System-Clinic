const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,

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

//Relations

db.pessoa.belongsTo(db.usuarios, {foreignKey: 'Usuario_id'});
db.pessoa.belongsTo(db.enderecos, {foreignKey: 'Endereco_id'});
db.telefone.hasMany(db.pessoa, {constrains: false, foreignKey: 'Telefone_id'});

db.funcionario.belongsTo(db.pessoa, {foreignKey: 'Pessoas_id'});

db.pacientes.belongsTo(db.pessoa, {foreignKey: 'Pessoas_id'});

db.protuarios.belongsTo(db.pacientes, {foreignKey: 'Paciente_id'});
db.protuarios.belongsTo(db.funcionario, {foreignKey: 'Funcionario_id'});
db.consultas.hasMany(db.protuarios, {constrains: false, foreignKey: 'Consultas_id'});

db.consultas.belongsTo(db.pacientes, {foreignKey: 'Paciente_id'});
db.consultas.belongsTo(db.funcionario, {foreignKey: 'Funcionario_id'});

module.exports = db;