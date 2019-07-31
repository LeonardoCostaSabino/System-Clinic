module.exports = (sequelize, Sequelize) => {
    const Telefone = sequelize.define('telefones', {
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        DDD: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
        },
        Telefone: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
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