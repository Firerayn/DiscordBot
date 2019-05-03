const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

const attachment = new Discord.Attachment('https://github.com/Firerayn/DiscordBot/archive/master.zip')

bot.on('message', (receivedMessage) => {
    if(receivedMessage.author == bot.user) {
        return
    }
    
    receivedMessage.channel.send(attachment)
})

return;
}

module.exports.help = {
  name:"source",
  description: "Links the Source files as attachment."
}