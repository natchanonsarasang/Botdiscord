const cron = require("node-cron");


function startScheduler(client){


cron.schedule(

"0 18 * * *",

()=>{


const channel = client.channels.cache.get(
process.env.CHANNEL_ID
);



if(!channel) return;



channel.send(

"🔔 ตอนนี้เวลา 18:00 น. แล้วครับ ถึงเวลาเลิกงานครับ"

);



});


}



module.exports = startScheduler;