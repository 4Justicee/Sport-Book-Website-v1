module.exports = (sequelize, Sequelize) => {
    const Inplay = sequelize.define(
        "inplay",
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
            our_event_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            r_id: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            ev_id: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: '',
            },
            updated: {
                type: Sequelize.TINYINT,
                allowNull: true,
                defaultValue: '0',
            },
            updated_at: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            is_top: {
                type: Sequelize.TINYINT,
                allowNull: true,
                defaultValue: 0,
            },
            is_hightlight: {
                type: Sequelize.TINYINT,
                allowNull: true,
                defaultValue: 0,
            },
        },
        {
               timestamps: true,
        }
    );
    
    return Inplay;
};
