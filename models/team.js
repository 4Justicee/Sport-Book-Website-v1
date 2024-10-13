module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define(
        "team",
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
            image_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            has_squad: {
                type: Sequelize.TINYINT,
                allowNull: true,
                defaultValue: 0,
            },            
        },
        {
               timestamps: true,
        }
    );

    return Team;
};
