module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('usuarios', {
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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