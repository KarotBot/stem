const { GCommands, Color } = require("gcommands")
const Discord = require('discord.js');

module.exports = {
    name: "ready",
    run: async (client) => {
        new GCommands(client, {
            cmdDir: "src",
            slash: {
               slash: 'both',
               prefix: '-'
            },
            cooldown: {
                message: "Please wait {cooldown} more seconds before reusing the \`{cmdname}\` command.",
                default: 0
            },
        })

        const axios = require("axios").default

    const buff = await axios.get("http://127.0.0.1:6969/api");

    client.channels.cache.get('845704285656186900').setName(`🌍Guilds: ${buff.data.guilds_total}`);

   setInterval(async() => {
    const buff = await axios.get("http://127.0.0.1:6969/api");

    client.channels.cache.get('845704285656186900').setName(`🌍Guilds: ${buff.data.guilds_total}`);
    }, 3600000);
    }}
