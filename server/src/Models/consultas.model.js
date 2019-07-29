module.exports = (sequelize, Sequelize) => {
    const Consultas = Sequelize.define('consultas', {
        ID: {
            type: Sequelize.INT,
            autoIncrement: true,
            primaryKey: true
        },
        Data: {
            type: Sequelize.DATA,
            required:  true,
            allowNull: false
        },
        Hora: {
            type: Sequelize.TIME,
            required:  true,
            allowNull: false
        },
        Medico: {
            type: Sequelize.INT,
            required:  true,
            allowNull: false
        },
        Paciente: {
            type: Sequelize.INT,
            required: true,
            allowNull: false
        }
    });
    return Consultas;
};