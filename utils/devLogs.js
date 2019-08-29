const {devlogsConfig} = require("./config/devlogs.json")

const devlogs = function(msg){
    if (msg.content.includes("!dev add") === true) {
        let param = msg.content.substr(9)
        console.log(param);
        const channel = msg.channel
        console.log(channel.id);
        console.log(devlogsConfig.restrictedChannelId);
        
        
        if (channel.id === devlogsConfig.restrictedChannelId && devlogsConfig.restrictChannel === true && devlogsConfig.msgDelete === true) {
            channel.send("```diff\n+ "+param+"\n```");
            console.log("1");
            
            msg.delete(3000)
        }
        if (channel.id === devlogsConfig.restrictedChannelId && devlogsConfig.restrictChannel === true && devlogsConfig.msgDelete === false) {
            channel.send("```diff\n+ "+param+"\n```");
            console.log("2");
        }
        if (devlogsConfig.msgDelete === true && devlogsConfig.restrictChannel === false) {
            channel.send("```diff\n+ "+param+"\n```");
            msg.delete(devlogsConfig.timeBeforeMessageIsDeleted)
            console.log("3");
        }
        if (devlogsConfig.msgDelete === false && devlogsConfig.restrictChannel === false) {
            channel.send("```diff\n+ "+param+"\n```");
            console.log("4");
        }
    }
}
module.exports = devlogs