require("dotenv").config();


require("./database/init");


const {
Client,
GatewayIntentBits,
Collection
}=require("discord.js");



const client = new Client({

intents:[
    GatewayIntentBits.Guilds
]

});



client.commands = new Collection();



const register =
require("./commands/register");


const checkin =
require("./commands/checkin");


const member =
require("./commands/member");



client.commands.set(
"register",
register
);


client.commands.set(
"checkin",
checkin
);


client.commands.set(
"member",
member
);



client.on(
"interactionCreate",
async interaction=>{


if(!interaction.isChatInputCommand())
return;



const command =
client.commands.get(
interaction.commandName
);



if(command){

await command.execute(
interaction
);

}


});




client.once(
"clientReady",
()=>{

console.log(
`Online : ${client.user.tag}`
);

});



client.login(
process.env.TOKEN
);