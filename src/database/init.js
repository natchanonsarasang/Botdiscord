const db = require("./db");


db.serialize(()=>{


db.run(`

CREATE TABLE IF NOT EXISTS members (

id INTEGER PRIMARY KEY AUTOINCREMENT,

discord_id TEXT UNIQUE,

firstname TEXT,

lastname TEXT,

position TEXT

)

`);



db.run(`

CREATE TABLE IF NOT EXISTS checkins (

id INTEGER PRIMARY KEY AUTOINCREMENT,

member_id INTEGER,

date TEXT

)

`);



console.log("Database initialized");


});