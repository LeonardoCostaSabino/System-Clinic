module.exports = (sequelize, Sequelize) => {
    const Endereco = sequelize.define('enderecos', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Logradouro: {
            type: Sequelize.STRING
        },
        Bairro: {
            type: Sequelize.STRING
        },
        Cidade: {
            type: Sequelize.STRING
        },
        UF: {
            type: Sequelize.STRING
        },
        CEP: {
            type: Sequelize.INTEGER
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
        modelName: 'endereco'
    });
    return Endereco;
};