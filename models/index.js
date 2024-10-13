
const Sequelize = require("sequelize");
const config = require("../config/main");

const sequelize = new Sequelize(config.database.name, config.database.user, config.database.pass, {
    host: config.database.host,
    dialect: config.database.type,
    port: config.database.port,
    logging: config.database.logging,
    pool: {
        max: 30,
        min: 0, 
        acquire: 30000, 
        idle: 10000,
    },
    timezone: "+09:00",
});

const db = {};

db.Inplay = require("./inplay")(sequelize, Sequelize);
db.Upcoming = require("./upcoming")(sequelize, Sequelize);
db.League = require("./league")(sequelize, Sequelize);
db.Ended = require("./ended")(sequelize, Sequelize);
db.Team = require("./team")(sequelize, Sequelize);
db.PrematchOdds = require("./odds")(sequelize, Sequelize, db.Upcoming);
db.InplayOdds = require("./inplayOdd")(sequelize, Sequelize, db.Inplay);
db.MyBet = require("./mybet")(sequelize, Sequelize);
db.Agent = require("./agent")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);
db.FavGames = require("./favs")(sequelize, Sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sync = async () => {
    await db.sequelize.sync();

    Object.keys(db).forEach(async (modelName) => {
        if (db[modelName].associate) {
            await db[modelName].associate(db);
        }
    });

};

module.exports = db;
