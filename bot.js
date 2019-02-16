const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+slash') {
    	message.reply(':green_heart: Servidores SlashMC :green_heart: 

:shinto_shrine: Factions Mystic MCPE:
**IP:** jogar.redeslash.com
**Porta:** 19132
**Versão:** 1.1.5');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
