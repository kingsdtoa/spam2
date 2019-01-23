const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("536844064990035968")
setInterval(function() {
channel.send(`zfgs25`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
