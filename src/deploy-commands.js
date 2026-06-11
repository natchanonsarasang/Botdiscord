require("dotenv").config();


const {

REST,

Routes,

SlashCommandBuilder

}=require("discord.js");



const commands=[



new SlashCommandBuilder()

.setName("register")

.setDescription("Register member")

.addStringOption(option=>

option

.setName("firstname")

.setDescription("Firstname")

.setRequired(true)

)



.addStringOption(option=>

option

.setName("lastname")

.setDescription("Lastname")

.setRequired(true)

)



.addStringOption(option=>

option

.setName("position")

.setDescription("Position")

.setRequired(true)

)



.toJSON(),





new SlashCommandBuilder()

.setName("checkin")

.setDescription("Check in today")

.toJSON(),

new SlashCommandBuilder()

.setName("testendwork")

.setDescription("ทดสอบข้อความเลิกงาน")

.toJSON(),



new SlashCommandBuilder()

.setName("member")

.setDescription("Show all members")

.toJSON()



];



const rest = new REST({

version:"10"

}).setToken(
process.env.TOKEN
);



rest.put(

Routes.applicationGuildCommands(

process.env.CLIENT_ID,

process.env.GUILD_ID

),

{

body:commands

}

)

.then(()=>{

console.log(
"Commands deployed"
);

});