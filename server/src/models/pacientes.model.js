module.exports = (sequelize, Sequelize) => {
    const Pacientes = sequelize.define('pacientes',{
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        //CPF do Paciente
        CPF: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
        },
        //Nome do Paciente
        Nome: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        //Genero do Paciente
        Genero: {
            type: Sequelize.STRING
        },
        //Data de Nascimento do Paciente
        DataNascimento: {
            type: Sequelize.DATE,
            required: true,
            allowNull: true
        },
        //Chave estrangeira da tabela Telefone
        Telefone_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: true,
            references: {
                model: 'telefones',
                key: 'ID'
            }
        },
        //Peso do Paciente
        Peso: {
            type: Sequelize.FLOAT,
        },
        //Altura do Paciente
        Altura: {
            type: Sequelize.FLOAT
        },
        //Tipo de sangue do Paciente
        Sangue: {
            type: Sequelize.STRING
        },
        //Primeira filiação do Paciente
        Filiacao1: {
            type: Sequelize.STRING
        },
        //Segunda filiação do Paciente
        Filiacao2: {
            type: Sequelize.STRING
        },
        //Chave estrangeira da tabela Usuario
        Usuario_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'ID'
            }
        },
        //Chave estrangeira do tabela Cargo
        Cargo_id: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
            references: {
                model: 'cargos',
                key: 'ID'
            }
        }

    });

    return Pacientes;
};
