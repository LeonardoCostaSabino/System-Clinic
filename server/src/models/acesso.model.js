module.exports = (sequelize, Sequelize) => {
    const Acesso = sequelize.define('acesso', {
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nome: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        Descricao: {
            type: Sequelize.STRING,
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
        modelName: 'acesso'
    });
    return Acesso;
};
