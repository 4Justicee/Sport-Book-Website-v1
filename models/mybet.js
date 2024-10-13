module.exports = (sequelize, Sequelize) => {
    const MyBet = sequelize.define(
        "mybet",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            playerCode: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            sport_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            event_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            bet: {
                type: Sequelize.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            condition: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            win: {
                type: Sequelize.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            status: {
                type: Sequelize.TINYINT,
                allowNull: true,
                defaultValue: 0, //0- defeat, 1-victory
            }
        },
        {
               timestamps: true,
        }
    );

    return MyBet;
};
