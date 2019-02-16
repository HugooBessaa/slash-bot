const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+slash') {
    	message.reply('alô me chamou? ixi verdade..\n:green_heart: Servidores SlashMC :green_heart:\n:shinto_shrine: Factions Mystic MCPE:\n**IP:** jogar.redeslash.com\n**Porta:** 19132\n**Versão:** 1.1.5\nCurtiu o bot?');
        message.react(":regional_indicator_p:")
        message.react(":regional_indicator_r:")
        message.react(":regional_indicator_o:")
        message.react(":regional_indicator_n:")
        message.react(":regional_indicator_t:")
        message.react(":regional_indicator_o:")
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
