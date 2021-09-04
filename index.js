const client = require('./init');
const { logger } = require('./utils/logger');

client.on('ready', () => {
  logger.info('start voice channel bot');
  client.user.setActivity('Made by Seolgang', { type: 'COMPETING' });
});

client.on('message', message => {
  if (!message.content.startsWith('.') || message.author.bot) return null;
});

client.login(process.env.BOT_TOKEN);
