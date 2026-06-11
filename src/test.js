const db =
require("./database/db");


db.all(
"SELECT * FROM members",
[],
(rows)=>{

console.log(rows);

});