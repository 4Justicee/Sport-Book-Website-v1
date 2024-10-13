module.exports = (sequelize, Sequelize) => {
    const Ended = sequelize.define(
        "ended",
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
            time: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            time_str : {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            time_status: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            league_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            league_name: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            league_cc: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            home_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            home_name: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            home_image_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            home_cc: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            away_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            away_name: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            away_image_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            away_cc: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            ss: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            scores: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            stats: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
        },
        {
               timestamps: true,
        }
    );

    return Ended;
};
