module.exports = (sequelize, Sequelize) => {
    const Pacientes = Sequelize.define('pacientes',{
        CPF: {
            type: Sequelize.INT,
            autoIncrement: true,
            primaryKey: true
        },
        Nome: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        Genero: {
            type: Sequelize.STRING
        },
        DataNascimento: {
            type: Sequelize.DATE,
            required: true,
            allowNull: true
        },
        Telefone: {
            type: Sequelize.INT,
            required: true,
            allowNull: true
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
        Usuario: {
            type: Sequelize.INT,
            required: true,
            allowNull: false
        },
        Grupo: {
            type: Sequelize.INT,
            required: true,
            allowNull: false
        }

    });
    return Pacientes;
};
