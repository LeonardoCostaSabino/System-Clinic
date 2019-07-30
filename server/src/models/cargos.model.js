module.exports = (sequelize, Sequelize) => {
    const Cargos = sequelize.define('cargos', {
        //ID do Cargo
        ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        //Label do Cargo
        Nome: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        //Descrição do Cargo
        Descricao: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        }
    });
    return Cargos;
};
