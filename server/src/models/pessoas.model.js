module.exports = (sequelize, Sequelize) => {
    const Pessoa = sequelize.define('pessoas',{
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        CPF: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
        },
        RG: {
            type: Sequelize.INTEGER,
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
        Endereco_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                required: true,
                references: {
                    model: 'enderecos',
                    key: 'ID'
                }
            },
        Usuario_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'ID'
            }
        },
        Telefone_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: true
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
        modelName: 'pessoas'
    });
    return Pessoa;
};