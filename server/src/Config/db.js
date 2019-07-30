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
db.cargos = require('../models/cargos.model.js')(sequelize, Sequelize);
// db.consultas = require('../models/consultas.model.js')(sequelize, Sequelize);
// db.endereco = require('../models/endereco.model.js')(sequelize, Sequelize);
// db.funcionarios = require('../models/funcionarios.model.js')(sequelize, Sequelize);
// db.medico = require('../models/medico.model.js')(sequelize, Sequelize);
db.paciente = require('../models/pacientes.model.js')(sequelize, Sequelize);
// db.prontuario = require('../models/prontuarios.model.js')(sequelize, Sequelize);
db.telefone = require('../models/telefone.model.js')(sequelize, Sequelize);
db.user = require('../models/usuarios.model.js')(sequelize, Sequelize);

db.paciente.hasMany(db.telefone, {as: 'telefone', constraints: false, foreignKey: 'Telefone_id'});
db.paciente.belongsTo(db.user, {as: 'user', constraints: false, foreignKey: 'Usuario_id'});
db.paciente.belongsTo(db.cargos, {as: 'cargos', constraints: false, foreignKey: 'Cargo_id'});

module.exports = db;