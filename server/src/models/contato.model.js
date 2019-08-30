module.exports = (sequelize, Sequelize) => {
    const Contato = sequelize.define('contatos', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        mensagem: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
    });
    return Contato;
};
