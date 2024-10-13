module.exports = (sequelize, Sequelize) => {
    const FavGames = sequelize.define(
        "favgame",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userCode: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "",
            },
 
            type: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "",
            },
            
            matchId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            info: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
        },
        {
            timestamps: true,
        }
    );

    return FavGames;
};
