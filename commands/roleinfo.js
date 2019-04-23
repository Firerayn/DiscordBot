const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  let sicon = message.guild.iconURL;
  let rolesembed = new Discord.RichEmbed()
  .setDescription("Roles")
  .setColor("#42e8f4")
  .setThumbnail(sicon)
  .addField("Maplestory 2", "Archer, Assassin, Berserker, Heavy Gunner, Knight, Priest, Rune Blader, Soul Binder, Striker, Thief, Wizard.");

  message.channel.send(rolesembed);
}

module.exports.help = {
  name:"roles",
  description: "Shows all available roles."
}
