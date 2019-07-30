module.exports = (sequelize, Sequelize) => {
    const Consultas = sequelize.define('consultas', {
        //ID da consulta
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        //Data da consulta --Calendário
        Data: {
            type: Sequelize.DATE,
            required:  true,
            allowNull: false
        },
        //Descrição da consulta --Calendário
        Descricao: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        //Bagde da consulta -- Calendário
        Borda: {
            type: Sequelize.BOOLEAN,
            required: true,
            allowNull: false
        },
        //Estilo da consulta --Calendário
        Estilo: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
        },
        //Hora da consulta
        Hora: {
            type: Sequelize.TIME,
            required:  true,
            allowNull: false
        },
        //Medico responsavel da consulta
        Medico: {
            type: Sequelize.INTEGER,
            required:  true,
            allowNull: false,
            references: {
                model: 'medicos',
                key: 'ID'
            }
        },
        //Paciente vitima da consulta
        Paciente: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'pacientes',
                key: 'ID'
            }
        }
    });
    return Consultas;
};
