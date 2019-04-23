const botconfig = require("./botconfig.json");
const bottoken = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
bot.help = new Discord.Collection();

fs.readdir("./commands/", (err, files)=>{
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile <= 0) {
    console.log("Commands not found.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online.`);
  bot.user.setActivity("Quantify", {type: "WATCHING"});
});
bot.on("error", console.error);
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  let prefix = botconfig.prefix;
  if(!message.content.startsWith(prefix)) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  if(message.content.indexOf(prefix) !== 0) return;
})

bot.login(bottoken.token);
