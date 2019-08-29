const Discord = require('discord.js');
const Gamedig = require('gamedig');
require('dotenv').config()
const devlogs = require("./utils/devLogs")
const ping = require("./utils/ping")
const client = new Discord.Client();




client.on('ready', c => {

  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  ping(msg)
  devlogs(msg) // function to add a devLog
});



client.login(process.env.SECRET_TOKEN)