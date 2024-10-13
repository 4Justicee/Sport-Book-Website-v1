const { DataTypes } = require('sequelize');  

module.exports = (sequelize, Sequelize, Inplay) => {
    const InplayOdds = sequelize.define(
        "inplayodds",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },            
            FI: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },            
            data: {
                type: DataTypes.TEXT('medium'),
                allowNull: true,
            },
            updated: {
                type: Sequelize.TINYINT,
                allowNull: true,
                defaultValue: '0',
            },
        },
        {
               timestamps: true,
        }
    );

    // Define the relationship
    InplayOdds.belongsTo(Inplay, {
        foreignKey: 'FI', // The field in InplayOdds that references Inplay's primary key (id)
        targetKey: 'id',  // The field in Inplay that is referenced by FI
        as: 'Inplay',     // Optional: Alias for the association
    });
    Inplay.hasOne(InplayOdds, {
        foreignKey: 'FI',
        sourceKey:'id'
    });
    return InplayOdds;
};
