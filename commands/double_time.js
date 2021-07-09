const { debug } = require('console');
const {Message} = require('discord.js')
module.exports = {
	name: 'doublehours',
	description: 'ping the hour role when the hour and minutes are the same',
	/** 
	* @param {Message } message
	*/ 
	execute(message) {

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function hour(){
            message.channel.send(`<@&863101511658897488> Thanks to me you will not forget to touch your noses in the hours and the minutes will be the same. Let the adventure begin !!`)
            var now = new Date();
            while(true){
                var heures = now.getHours();
                var minutes = now.getMinutes();
                if(heures == minutes && heures != 0)
                {
                message.channel.send(`<@&863101511658897488> It's time to touch your nose`)
                }
                if(heures == minutes && heures == 0)
                {
                message.channel.send(`<@&863101511658897488> HAPPY NEW YEAR`)
                }
                await sleep(10000);
                now = new Date();
            }	
        }
        hour();
	},
};