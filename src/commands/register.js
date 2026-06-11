const db =
require("../database/db");



module.exports={


async execute(interaction){


const discordId =
interaction.user.id;


const firstname =
interaction.options.getString("firstname");


const lastname =
interaction.options.getString("lastname");


const position =
interaction.options.getString("position");



db.run(`

INSERT INTO members

(
discord_id,
firstname,
lastname,
position
)

VALUES (?,?,?,?)

`,
[
discordId,
firstname,
lastname,
position
],


function(err){


if(err){

console.log(err);


interaction.reply(
"❌ คุณ Register แล้ว"
);

return;

}



console.log(
"Register user:",
discordId
);



interaction.reply(
"✅ Register สำเร็จ"
);



});


}


}