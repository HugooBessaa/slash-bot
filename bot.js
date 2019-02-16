const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+slash') {
    	message.reply('alô me chamou? ixi verdade..\n:green_heart: Servidores SlashMC :green_heart:\n:shinto_shrine: Factions Mystic MCPE:\n**IP:** jogar.redeslash.com\n**Porta:** 19132\n**Versão:** 1.1.5');
  	}
    if (message.content === 'O que fazer com um dominio?') {
    	message.channel.send('Faça igual ao Azalim, pegue nele enfie no cu! 😆😆');
  	}
    if (message.content === '+teste'){
        message.channel.send({embed: {
  color: 4bf442,
  description: "A very simple Embed!"
}});
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
