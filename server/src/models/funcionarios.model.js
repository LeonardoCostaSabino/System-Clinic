module.exports = (sequelize, Sequelize) => {
    const Funcionarios =  sequelize.define('funcionarios',{
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        PIS: {
            type: Sequelize.INTEGER
        },
        Titulo_Ele: {
            type: Sequelize.INTEGER
        },
        CRM: {
            type: Sequelize.INTEGER,
        },
        Especialidade: {
            type: Sequelize.STRING,
        },
        // Endereco_id: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     required: true,
        //     references: {
        //         model: 'enderecos',
        //         key: 'ID'
        //     }
        // },
        Pessoas_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true,
            references: {
                model: 'pessoas',
                key: 'ID'
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
        modelName: 'funcionario'
    });
    return Funcionarios;
};