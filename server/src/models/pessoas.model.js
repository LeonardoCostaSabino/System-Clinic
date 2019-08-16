module.exports = (sequelize, Sequelize) => {
    const Pessoa = sequelize.define('pessoas',{
        //ID do Cargo
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cpf: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        rg: {
            type: Sequelize.STRING,
        },
        nome: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        genero: {
            type: Sequelize.STRING
        },
        datanascimento: {
            type: Sequelize.STRING,
            required: true,
            allowNull: true
        },
        endereco_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                required: true,
                references: {
                    model: 'enderecos',
                    key: 'id'
                }
            },
        usuario_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        },
        telefone_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'telefones',
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
        modelName: 'pessoas'
    });
    return Pessoa;
};