module.exports = (sequelize, Sequelize) => {
    const Telefone = sequelize.define('telefones', {
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        //Label do Cargo
        DDD: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
        },
        //Descrição do Cargo
        Telefone: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
        }
    });
    return Telefone;
};