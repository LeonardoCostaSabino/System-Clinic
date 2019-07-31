module.exports = (sequelize, Sequelize) => {
    const Prontuarios = sequelize.define('prontuarios', {
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Descricao: {
            type: Sequelize.STRING
        },
        Limitacao: {
            type: Sequelize.STRING
        },
        Alergia: {
            type: Sequelize.STRING
        },
        Paciente_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'pacientes',
                key: 'ID'
            },
        },
        Funcionario_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'funcionarios',
                key: 'ID'
            },
        },
        Consultas_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'consultas',
                key: 'ID'
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

