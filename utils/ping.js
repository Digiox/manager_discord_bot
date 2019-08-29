const {pingConfig} = require("./config/ping.json")
const Gamedig = require('gamedig');
const pingCommand = "!"+pingConfig.command
const ping = function(msg){
  if (msg.content === pingCommand) {
    Gamedig.query({
        type: pingConfig.game,
        host: pingConfig.hostIP,
        port: pingConfig.hostPort
      }).then((state) => {
        console.log(state.ping);
        msg.reply("Le server à actuellement un ping de "+state.ping+" ms !")
      }).catch((error) => {
        console.log("Server is offline");
      });
  }
   
  
}
module.exports = ping