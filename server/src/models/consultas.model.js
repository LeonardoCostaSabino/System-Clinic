module.exports = (sequelize, Sequelize) => {
    const Consultas = sequelize.define('consultas', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Data: {
            type: Sequelize.DATE,
            required:  true,
            allowNull: false
        },
        Descricao: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        Borda: {
            type: Sequelize.BOOLEAN,
            required: true,
            allowNull: false
        },
        Estilo: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
        },
        Hora: {
            type: Sequelize.TIME,
            required:  true,
            allowNull: false
        },
        Funcionario_id: {
            type: Sequelize.INTEGER,
            required:  true,
            allowNull: false,
            references: {
                model: 'funcionarios',
                key: 'id'
            }
        },
        Paciente_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'pacientes',
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
        modelName: 'consultas'
    });
    return Consultas;
};
