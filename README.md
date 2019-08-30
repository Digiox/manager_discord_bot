# manager_discord_bot
### A configurable dicord bot for the game server

### Steps to make the bot work


* Go to https://discordapp.com/developers/applications/ and click New Application.
* Name your new app.
* On the left, find the section "Bot".
* Find the button "Add a bot"
* A popup asks you if you want to add a bot, click yes ...
* Give a name to your new bot
* now go back to the "General Information" section
* Now open a new tab and go to the following link, but first change {id} in your app ID
https://discordapp.com/oauth2/authorize?&client_id={id}&scope=bot&permissions=8
* Click on Enter
* Select the Discord server, then click Allow.
* Now clone the repository, run "bot.js" with the node, nodemon, etc.
* you need to make a .env file and name and include this line with your own bot token (how to do it: https://www.npmjs.com/package/dotenv)
> SECRET_TOKEN= YourBotToken


* you can configure some parameters in the menu util> config, but before that, read the bot features.


### Bot Features

For the moment, the bot can do two things:
1. Write devlogs for a game or server, use the /dev add command
> !dev add new feature to cars

2. he can ping a specified game server, no server rights required, you simply need the server Ip and port
>  !ping

## Configure the devlogs feature ...

Go to util> config and open devlogs.json
you will find the following configuration
> {
"devlogsConfig": {
"msgDelete": true,
"restrictChannel": false,
"timeBeforeMessageIsDeleted": 10000,
"restrictedChannelId": "615859932549480459"
}
}

* You can replace msgDelete with false if you prefer the script to delete the command message.
* If you set restrictChannel to true, you must change the modifier of the restrictChannel identifier to your channel ID, which will block the command on any other channel.
* then if msgDelete is true, you can change the delay before deleting the message by changing the value of timeBeforeMessageIsDeleted (value in milliseconds).


## Configure the ping feature ...

To use this feature, the game your server is running on need to be supported by Gamedig, go check the documentation for the full supported games list (https://www.npmjs.com/package/gamedig)


Go to util> config and open ping.json
you will find the following configuration
> {
    "pingConfig": {
        "game": "rust",
        "hostIP": "151.80.98.196",
        "hostPort": "28231",
        "command": "ping"
    }
}

* Change the game, hostIP and hostPort options to make the feature working
* you can change the default command with the command option



## This is not the end

I will work on the bot to add more features, but you can subit your request if you have some ideas for new features


### modules used

* Discord.js
* dotenv
* gamedig


