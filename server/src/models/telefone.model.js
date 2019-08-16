module.exports = (sequelize, Sequelize) => {
    const Telefone = sequelize.define('telefones', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ddd: {
            type: Sequelize.STRING,
        },
        telefone: {
            type: Sequelize.STRING,
        },
        celular: {
            type: Sequelize.STRING,
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
        modelName: 'telefones'
    });
    return Telefone;
};