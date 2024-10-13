module.exports = (sequelize, Sequelize) => {
    const Upcoming = sequelize.define(
        "upcoming",
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
            bet365_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
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
    
    return Upcoming;
};
