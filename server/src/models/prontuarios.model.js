module.exports = (sequelize, Sequelize) => {
    const Prontuarios = sequelize.define('prontuarios', {
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Medico: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'medicos',
                key: 'ID'
            }
        },
        Paciente: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'pacientes',
                key: 'ID'
            }
        },
        Consultas: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'consultas',
                key: 'ID'
            }
        },
        Descricao: {
            type: Sequelize.STRING
        },
        Limitacao: {
            type: Sequelize.STRING
        },
        Alergia: {
            type: Sequelize.STRING
        }
    });
}