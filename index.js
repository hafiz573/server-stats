const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
  client.user.setPresence({
    activity: {
      type: "PLAYING",
      name: "code by hafiz573"
    },
    status: "dnd"
  });
})

require("http").createServer((req, res) => res.end("alive")).listen();

client.on('guildMemberAdd', async member => {
    await client.channels.cache.get('id voice 1').setName(`🌎 totals: ${member.guild.memberCount}`)
    await client.channels.cache.get('id voice 2').setName(`👤 users: ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
    await client.channels.cache.get('id voice 3').setName(`🤖 bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`)
});

client.on('guildMemberRemove', async member => {
    await client.channels.cache.get('id voice 1').setName(`🌎 totals: ${member.guild.memberCount}`)
    await client.channels.cache.get('id voice 2').setName(`👤 users: ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
    await client.channels.cache.get('id voice 3').setName(`🤖 bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`)
   });

client.login("your token here");
