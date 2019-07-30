module.exports = (sequelize, Sequelize) => {
    const Endereco = sequelize.define('enderecos', {
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        //Parte Logradouro
        Logradouro: {
            type: Sequelize.STRING
        },
        //Parte Bairro
        Bairro: {
            type: Sequelize.STRING
        },
        //Parte Cidade
        Cidade: {
            type: Sequelize.STRING
        },
        //Parte UF
        UF: {
            type: Sequelize.STRING
        },
        //Parte CEP
        CEP: {
            type: Sequelize.INTEGER
        }
    });
    return Endereco;
};