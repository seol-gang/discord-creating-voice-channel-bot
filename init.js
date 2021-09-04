const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const commandFiles = fs
  .readdirSync('./commands')
  .filter(file => file.endsWith('js'));

client.commands = new Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

module.exports = client;
