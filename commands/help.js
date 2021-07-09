const {Message, MessageEmbed, Collection} = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Give all the commands',
	/** 
	* @param {Message } message
    * @param {Collection } message.commands
	*/ 
	execute(message) {
        const msg = new MessageEmbed()
        .setColor('BLUE')
        .setTitle("__Every single commands of my bot__")
        .setTimestamp(new Date())
        let msgarr = message.commands.array()

        for(let pas = 0; pas < msgarr.length; pas++){
            msg.addField(process.env.PREFIX + msgarr[pas].name, msgarr[pas].description)
        }
        
        message.channel.send(msg)
	},
};