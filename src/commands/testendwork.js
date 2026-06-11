module.exports = {


async execute(interaction){


await interaction.channel.send(

"🔔 ตอนนี้เวลา 18:00 น. แล้วครับ ถึงเวลาเลิกงานครับ"

);


interaction.reply({

content:"✅ ทดสอบข้อความเลิกงานแล้ว",

ephemeral:true

});


}


}