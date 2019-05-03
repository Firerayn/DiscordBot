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
//Test 
let name = args[0].toLowerCase();
let command = bot.commands.get(name) || bot.commands.find(c => c.name && c.name.includes(name));

if (!command) {
	return message.reply('that\'s not a valid command!');
}

data.push(`**Name:** ${command.name}`);

if (command.description) data.push(`**Description:** ${command.description}`);

data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

message.channel.send(data, { split: true });
/////////
//Alt    
/*  let helpembed = new Discord.RichEmbed()
  .setDescription("~Help~")
  .setColor("#42e8f4")
  .addField("!help", "Shows this")
  .addField("!roles", "Shows all available roles.")
  .addField("!add", "Sets the specified role. (!add Role)")
  .addField("!rem", "Removes the specified role. (!rem Role)");

  message.channel.send(helpembed);
*/
/////////
}

module.exports.help = {
  name:"helptest",
  description: "Shows the available commands."
}
