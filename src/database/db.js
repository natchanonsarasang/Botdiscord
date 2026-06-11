const Database = require("better-sqlite3");


const db = new Database(
    "./data/bot.db"
);


module.exports = db;