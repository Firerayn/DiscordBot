const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

try{
    await message.delete().catch(O_o ={});
  }catch(e){
    let messageembed2 = new Discord.RichEmbed()
    .setDescription("~Error~")
    .setColor("#E64100")
    .addField("Error", "Message could not be deleted.");
    message.channel.send(messageembed2);
  }

const attachment = new Discord.Attachment('https://github.com/Firerayn/DiscordBot/archive/master.zip')
    
    message.channel.send("This is the latest commit of this bots' source.")
    message.channel.send(attachment)

}

module.exports.help = {
  name:"source",
  description: "Links the Source files as attachment."
}
