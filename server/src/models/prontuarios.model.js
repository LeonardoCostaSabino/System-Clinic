module.exports = (sequelize, Sequelize) => {
    const Prontuarios = sequelize.define('prontuarios', {
        //ID do Cargo
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descricao: {
            type: Sequelize.STRING
        },
        limitacao: {
            type: Sequelize.STRING
        },
        alergia: {
            type: Sequelize.STRING
        },
        paciente_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'pacientes',
                key: 'id'
            },
        },
        funcionario_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'funcionarios',
                key: 'id'
            },
        },
        consultas_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'consultas',
                key: 'id'
            },
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
        modelName: 'prontuarios'
    });
    return Prontuarios;
};

