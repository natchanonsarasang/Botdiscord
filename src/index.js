require("dotenv").config();


require("./database/init");


const {
Client,
GatewayIntentBits,
Collection
}=require("discord.js");



const startScheduler =
require("./utils/scheduler");



const client = new Client({

intents:[
    GatewayIntentBits.Guilds
]

});



client.commands = new Collection();



// commands

const register =
require("./commands/register");


const checkin =
require("./commands/checkin");


const member =
require("./commands/member");


const testendwork =
require("./commands/testendwork");





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


client.commands.set(
"testendwork",
testendwork
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


// เริ่มระบบส่งข้อความเวลา 18:00

startScheduler(client);


});





client.login(
process.env.TOKEN
);