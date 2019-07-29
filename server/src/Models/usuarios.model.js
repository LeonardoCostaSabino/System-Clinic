module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('usuarios', {
        Nome: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        Username: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        Senha: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        }
    });
    return User;
}