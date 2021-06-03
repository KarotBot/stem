const Discord = require("discord.js");

module.exports = {
    name: 'kick',
    description: 'Kicks the asshole that is spamming like a dick.',
    guildOnly: "822467921653137438",
    cooldown: 0,
    slash: false,
    aliases: ["b"],
    requiredRole: "838122415652864072",
    run: async(client, slash, message, args) => {
        const logs = client.channels.cache.get("842080763767029810");
        let reason = args.slice(1).join(' ');
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.channel.send("<:kt_stupid:839115012592894033> Pls mention whom you wish to kick.").then(msg => msg.delete({timeout: 3500}))
        if (reason.length < 1) return message.channel.send('<:kt_stupid:839115012592894033> Pls specify the kick reason.').then(msg => msg.delete({timeout: 3500}))
        const member = message.guild.member(user);
    
        user.send(`**You were kicked from the official Karot Discord server!**\nModerator: \`${message.author.tag}\`\nReason: \`${reason}\``);

        member.kick(`${message.author.tag} - ` + args.slice(1).join(" ")).then(() => {
            message.channel.send(`**${user.tag}** was sucessfuly kicked!`).then(msg => msg.delete({timeout: 3500}))
        })


        var modlogembed = new Discord.MessageEmbed()
        .setTitle('Kick')
        .addFields(
            { name: 'User', value: `${user.tag}`, inline: true },
            { name: 'Moderator', value: `\`${message.author.tag}\``, inline: true },
          )
          .addField('Reason', `${reason}`)
          .setThumbnail(user.avatarURL({dynamic:true}))
          .setColor('#e54918')
          .setTimestamp();
          logs.send(modlogembed)
    }}