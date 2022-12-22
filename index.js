require("dotenv").config();
const discord = require("discord.js");;
const client = new discord.Client({
  intents: [
      discord.Intents.FLAGS.GUILDS,
      discord.Intents.FLAGS.GUILD_MESSAGES,
      discord.Intents.FLAGS.GUILD_VOICE_STATES,
      discord.Intents.FLAGS.GUILD_PRESENCES,
      discord.Intents.FLAGS.GUILD_MEMBERS
  ]
})
const config = require("./config.json");

//======================================================================================
// =======================================HANDLER=======================================
client.commands = new discord.Collection();
client.events = new discord.Collection();
client.slash = new discord.Collection();
["commandHandler", "eventHandler", "slashHandler"].forEach((file) => {
  require(`./handlers/${file}`)(client, discord);
});

client.login(process.env.TOKEN);

//=======================================================================================
// =======================================VOICE-99=======================================
client.on("voiceStateUpdate", async (member,message,oldMember,newMember) => {
  await client.guilds.cache.get("896275408360730646")?.members.fetch() //ID DEL SERVIDOR
let userCount = client.guilds.cache.get("896275408360730646")?.members.cache.filter(m => m.voice.channel).size  
if (userCount === 100){
const owner = client.users.cache.get('708739244553797643') //ID DE LA PERSONA QUE LE LLEGARA EL MD
owner.send('El servidor acaba de llegar a 99 usuarios en canales de voz!')
}
})
