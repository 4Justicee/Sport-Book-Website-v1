const { DataTypes } = require('sequelize');  

module.exports = (sequelize, Sequelize, Upcoming) => {
    const PrematchOdds = sequelize.define(
        "prematchOdds",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            FI: {
                type: Sequelize.INTEGER,
                allowNull: true,
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
    PrematchOdds.belongsTo(Upcoming, {
        foreignKey: 'FI', // The field in InplayOdds that references Inplay's primary key (id)
        targetKey: 'id',  // The field in Inplay that is referenced by FI
        as: 'Upcoming',     // Optional: Alias for the association
    });

    Upcoming.hasOne(PrematchOdds, {
        foreignKey: 'FI',
        sourceKey: 'id'
    });
    return PrematchOdds;
};
