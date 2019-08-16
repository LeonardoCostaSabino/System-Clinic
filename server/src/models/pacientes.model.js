module.exports = (sequelize, Sequelize) => {
    const Pacientes = sequelize.define('pacientes',{
        //ID do Cargo
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        peso: {
            type: Sequelize.STRING,
        },
        altura: {
            type: Sequelize.STRING
        },
        sangue: {
            type: Sequelize.STRING
        },
        filiacao1: {
            type: Sequelize.STRING
        },
        filiacao2: {
            type: Sequelize.STRING
        },
        pessoas_id: {
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
        modelName: 'pacientes'
    });
    return Pacientes;
};
