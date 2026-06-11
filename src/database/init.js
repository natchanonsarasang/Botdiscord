const db = require("./db");


db.prepare(`

CREATE TABLE IF NOT EXISTS members (

id INTEGER PRIMARY KEY AUTOINCREMENT,

discord_id TEXT UNIQUE,

firstname TEXT,

lastname TEXT,

position TEXT

)

`).run();



db.prepare(`

CREATE TABLE IF NOT EXISTS checkins (

id INTEGER PRIMARY KEY AUTOINCREMENT,

member_id INTEGER,

date TEXT

)

`).run();



console.log("Database ready");