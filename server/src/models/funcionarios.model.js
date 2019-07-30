module.exports = (sequelize, Sequelize) => {
    const Funcionarios =  sequelize.define('funcionarios',{
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        //Cpf do funcionário
        Cpf: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true,
        },
        //Nome do funcionário
        Nome: {
            type: Sequelize.STRING,
            allowNull: false,
            required: true
        },
        //Data de Nascimento do funcionário
        DataNascemento: {
            type: Sequelize.DATE,
            allowNull: false,
            required: true
        },
        //Chave estrangeira Tabela de Cargos
        Cargo: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true,
            references: {
                model: 'cargos',
                key: 'ID'
            }
        },
        //Chave estrangeira Tabela de Endereços
        Endereco: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true,
            references: {
                model: 'enderecos',
                key: 'ID'
            }
        },
        //Chave estrangeira Tabela de Telefones
        Telefone: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true,
            references: {
                model: 'telefones',
                key: 'ID'
            }
        },
        //Chave estrangeira Tabela de Usuários
        User: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true,
            references: {
                model: 'pacientes',
                key: 'ID'
            }
        }
    });
    Funcionarios.associate = function (models) {
        Consultas.belongsTo(models.User, {foreignKey: 'ID', as: 'usuarios'})
    };
    Funcionarios.associate = function (models) {
        Consultas.hasMany(models.Telefone, {foreignKey: 'ID', as: 'telefones'})
    };
    Funcionarios.associate = function (models) {
        Consultas.belongsTo(models.Endereco, {foreignKey: 'ID', as: 'enderecos'})
    };
    Funcionarios.associate = function (models) {
        Consultas.belongsTo(models.Cargo, {foreignKey: 'ID', as: 'cargos'})
    };
    return Funcionarios;
};