const db = require("../database/db");

const {
    getToday
} = require("../utils/date");



module.exports = {


async execute(interaction){


const discordId = interaction.user.id;


console.log("CHECKIN ID:", discordId);



// หา member จาก discord id

db.get(

`
SELECT *

FROM members

WHERE discord_id = ?

`,

[discordId],


(err, member)=>{


if(err){

console.log(err);


return interaction.reply(
"❌ Database error"
);

}



console.log("FOUND MEMBER:", member);



if(!member){

return interaction.reply(

"❌ กรุณา /register ก่อน"

);

}



const today = getToday();



// เช็คว่า checkin วันนี้แล้วหรือยัง

db.get(

`

SELECT *

FROM checkins

WHERE member_id = ?

AND date = ?

`,

[
member.id,
today
],


(err, checkin)=>{


if(err){

console.log(err);


return interaction.reply(
"❌ Database error"
);

}



if(checkin){


return interaction.reply(

"⚠️ คุณ Check-in แล้ววันนี้"

);


}





// บันทึก checkin

db.run(

`

INSERT INTO checkins

(member_id,date)

VALUES (?,?)

`,

[
member.id,
today
],


(err)=>{


if(err){

console.log(err);


return interaction.reply(

"❌ เกิดข้อผิดพลาด"

);

}



interaction.reply(

"✅ Check-in สำเร็จ"

);



});


});


});


}



}