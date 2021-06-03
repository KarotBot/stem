const Discord = require("discord.js");
const client = new Discord.Client({disableMentions:"everyone"});

client.events = new Discord.Collection();
require(`./event`)(client);

client.on('ready', () => client.events.get("ready").run(client));

client.on("debug", async info => console.log(info));


/*const f = client.api.applications(client.user.id)
f.guilds("822467921653137438")
console.log(await f.commands.get())

const app = client.api.applications(client.user.id)
app.guilds("822467921653137438")
await app.commands("842072070510346301").delete()*/


client.on('guildMemberAdd', member => {
    client.channels.cache.get('833376974688354334').send(`<:kt_hey:822468640103202858> **Welcome to the official Karot Discord server!** <@${member.user.id}>\nMake sure to read <#849676689100898314>, if you ever need help feel free to ask in <#836661748207190096>.`);
    var dm = new Discord.MessageEmbed()
    .setTitle(`Welcome to the official Karot Discord server ${member.user.tag}!`)
    .addField('What is dis place?', 'The Karot Discord server acts as a place for support and discussion of the bot Karot.')
    .addField('Sounds great! How do I start?', 'Start by reading the rules in <#849676689100898314>, after that you can start chatting!')
    .setFooter('Need help? Check https://docs.karot.xyz before asking.', 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/sos-button_1f198.png')
    .setColor('#e54918')
    member.send(dm)
    .catch(err => {
        console.log(err)
        })
    })

  client.on('message', message => {
    if(!message.guild) return;
   if(message.author.bot) return;

   if (message.content === "<@"+client.user.id+">" || message.content == "<@!"+client.user.id+">") {

    return message.channel.send(`**I do stuff for the <@822391645697212416> guild!** <:kekega:822475395281715250>`);
}

      if(["prefix", "prefyk"].some(v => message.content.toLowerCase().includes(v.toLowerCase()))) {
          var pe = new Discord.MessageEmbed()
          .addField('How do I change the Prefix?', 'The prefix can easily be changed using the `+prefix [prefix]` command.\nYou can find more via [our docs](https://docs.karot.xyz/configuration/setting-the-prefix).')
          .setColor("#e54918")
          .setFooter(`Need more help? Open a ticket!`)
          .setTimestamp();
          message.reply(pe)
      }

      if(["embed", "enbed"].some(v => message.content.toLowerCase().includes(v.toLowerCase()))) {
        var pe = new Discord.MessageEmbed()
        .addField('How do I make an embed with the bot?', 'You can easily create a similar looking embed to the one in the image using the `+embed [content]` command.\nYou can find more via [our docs](https://docs.karot.xyz/advanced/embeds).')
        .setColor("#e54918")
        .setImage("https://i.imgur.com/UGV4Ai1.png")
        .setFooter(`Need more help? Open a ticket!`)
        .setTimestamp();
        message.reply(pe)
    }
      
          if(["🤡", "🖕", "🖕🏼", "🖕🏽", "🖕🏾", "🖕🏿", "🖕🏻"].some(v => message.content.toLowerCase().includes(v.toLowerCase()))) {
           message.delete()

           message.author.send('**That emoji is disabled on this server!** \nCertains emojis are disabled to avoid toxicity, raiding ext. :frowning:')
          .catch(error =>
          message.reply('**That emoji is disabled on this server!** \nCertains emojis are disabled to avoid toxicity, raiding ext. :frowning:').then(msg => msg.delete({timeout: 5000}))
      );
      }
  })

  client.login("you thought lol");