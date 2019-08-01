module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('usuarios', {
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        NickName: {
            type: Sequelize.STRING,
        },
        Email: {
            type: Sequelize.STRING,
        },
        Senha: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        Acesso_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'acessos',
                key: 'ID'
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
    }, {
        sequelize,
        modelName: 'usuarios'
    });
    return User;
}