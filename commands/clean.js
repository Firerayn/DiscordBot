const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
let a = false;
if(a){
  message.channel.bulkDelete(100)
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
}
else return;
}

module.exports.help = {
  name:"clean",
  description: "Deletes 100 Messages from a channel."
}
