module.exports = (sequelize, Sequelize) => {
    const Cargos = sequelize.define('cargos',{
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
        Descricao: {
            type: Sequelize.STRING
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
        modelName: 'cargos'
    });
    return Cargos;
};
