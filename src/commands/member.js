const db = require("../database/db");


const {
    getToday
} = require("../utils/date");



module.exports = {


async execute(interaction){


const today = getToday();



db.all(

`

SELECT *

FROM members

`,

[],

(err, members)=>{



if(err){

console.log(err);


return interaction.reply(

"❌ Database error"

);

}




if(members.length === 0){


return interaction.reply(

"❌ ยังไม่มีสมาชิก"

);


}




let text =

"📋 สมาชิกทั้งหมด\n\n";



let count = 0;



members.forEach((member)=>{



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

}



text +=

`${checkin ? "🟢 เข้างานแล้ว" : "🔴 ยังไม่เข้างาน"} | ${member.firstname} ${member.lastname} (${member.position})\n`;



count++;



if(count === members.length){


interaction.reply(text);


}



});


});



});


}



}