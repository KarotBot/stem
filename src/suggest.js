const Discord = require('discord.js');

module.exports = {
  name: 'suggest',
  description: 'Creates an idea and voting poll in the #suggestions channel.',
  guildOnly: "822467921653137438",
  cooldown: 120,
  expectedArgs: '<suggestion:3:suggestion>',
  minArgs: 1,
  run: async(client, slash, message, args) => {
    const schannel = client.channels.cache.get("841941277536550922");
    if(message) {
      message.delete()
      const suggestion = args.slice(0).join(" ");
      if(!suggestion) {
        return message.reply('<:kt_pain:822491637023899678> You need to specifiy your suggestion!').then(msg => msg.delete({timeout: 2000}))
      }
      console.log(`${message.author.tag} - ${suggestion}`)

      var sembed = new Discord.MessageEmbed()
        .setTitle('New Suggestion')
        .setFooter('Suggestions are always 100% anonymous.')
        .setDescription(suggestion)
        .setColor('#e54918')
        schannel.send(sembed).then(function (message) {
              message.react('822473993780068393')
              message.react('822475199755583488')
        })
      return;
  }

  var args = slash.data.options

  var slashsembed = new Discord.MessageEmbed()
    .setTitle('New Suggestion')
    .setFooter('Suggestions are always 100% anonymous.')
    .setDescription(args[0].value)
    .setColor('#e54918')
    schannel.send(slashsembed).then(function (message) {
      message.react('822473993780068393')
      message.react('822475199755583488')
    })

    return {
      ephemeral: true,
      content: 'Thank you for your suggestion!',
    }
  }  
}