module.exports = (sequelize, Sequelize) => {
    const League = sequelize.define(
        "league",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            sport_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            cc: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            has_leaguetable: {
                type: Sequelize.TINYINT,
                allowNull: true,
                defaultValue: 0,
            },
            has_toplist: {
                type: Sequelize.TINYINT,
                allowNull: true,
                defaultValue: 0,
            },            
        },
        {
               timestamps: true,
        }
    );

    return League;
};
