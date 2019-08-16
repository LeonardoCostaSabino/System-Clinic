module.exports = (sequelize, Sequelize) => {
    const Consultas = sequelize.define('consultas', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        data: {
            type: Sequelize.DATE,
            required:  true,
            allowNull: false
        },
        descricao: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        borda: {
            type: Sequelize.BOOLEAN,
            required: true,
            allowNull: false
        },
        estilo: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
        },
        hora: {
            type: Sequelize.TIME,
            required:  true,
            allowNull: false
        },
        funcionario_id: {
            type: Sequelize.INTEGER,
            required:  true,
            allowNull: false,
            references: {
                model: 'funcionarios',
                key: 'id'
            }
        },
        paciente_id: {
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
