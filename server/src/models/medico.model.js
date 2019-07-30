module.exports = (sequelize, Sequelize) => {
    const Medico = sequelize.define('medicos', {
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        //Crm do Médico
        CRM: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true
        },
        //Nome do Médico
        Nome: {
            type: Sequelize.STRING,
            required:  true,
            allowNull: false
        },
        //Especialidade do Médico
        Especialidade: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        //Chave estrangeira da Tabela usuários
        User: {
            type: Sequelize.BOOLEAN,
            required: true,
            allowNull: false,

        }
    });
    return Medico;
};
