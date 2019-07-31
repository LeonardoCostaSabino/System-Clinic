module.exports = (sequelize, Sequelize) => {
    const Pacientes = sequelize.define('pacientes',{
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Peso: {
            type: Sequelize.FLOAT,
        },
        Altura: {
            type: Sequelize.FLOAT
        },
        Sangue: {
            type: Sequelize.STRING
        },
        Filiacao1: {
            type: Sequelize.STRING
        },
        Filiacao2: {
            type: Sequelize.STRING
        },
        Pessoas_id: {
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
