const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  let boticon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#42e8f4")
  .setThumbnail(boticon)
  .addField("Bot Name", bot.user.username)
  .addField("Bot Create Date", bot.user.createdAt)
  .addField("Servers", bot.guilds.size);

  message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo",
  description: "Shows the bot's info."
}
