const bcrypt = require('bcryptjs');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('usuarios', {
        //ID do Cargo
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nickname: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        senha: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        acesso_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'acessos',
                key: 'id'
            }
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
    },{
        instanceMethods: {
            generateHash(senha) {
                return bcrypt.hash(senha, bcrypt.genSaltSync(8));
            },
            validPassword(senha) {
                return bcrypt.compare(senha, this.senha);
            }
        }
    });
    return User;
}