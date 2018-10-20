const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("ready", () => {
  console.log("Bağlandım!")   
});

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'f!yardım Bot aktif.',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});

client.login(process.env.BOT_TOKEN);
