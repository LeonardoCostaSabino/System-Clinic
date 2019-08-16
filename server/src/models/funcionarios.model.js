module.exports = (sequelize, Sequelize) => {
    const Funcionarios =  sequelize.define('funcionarios',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pis: {
            type: Sequelize.INTEGER
        },
        titulo_Ele: {
            type: Sequelize.INTEGER
        },
        crm: {
            type: Sequelize.INTEGER,
        },
        especialidade: {
            type: Sequelize.STRING,
        },
        pessoas_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true,
            references: {
                model: 'pessoas',
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
    }, {
        sequelize,
        modelName: 'funcionario'
    });
    return Funcionarios;
};