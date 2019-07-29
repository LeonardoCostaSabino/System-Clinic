module.exports = (sequelize, Sequelize) => {
    const Grupos = Sequelize.define('grupos', {
        ID: {
            type: Sequelize.INT,
            autoIncrement: true,
            primaryKey: true
        },
        Nome: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        Descricao: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        }
    });
    return Grupos;
};
