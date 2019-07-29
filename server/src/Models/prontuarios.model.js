module.exports = (sequelize, Sequelize) => {
    const Prontuarios = sequelize.define('prontuarios', {
        Id: {
            type: Sequelize.INT,
            autoIncrement: true,
            primaryKey: true
        },
        Medico: {
            type: Sequelize.INT,
            required: true,
            allowNull: false
        },
        Paciente: {
            type: Sequelize.INT,
            required: true,
            allowNull: false
        },
        Consultas: {
            type: Sequelize.INT,
            required: true,
            allowNull: false
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