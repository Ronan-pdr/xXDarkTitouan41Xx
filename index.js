require('dotenv').config()
const fs = require('fs');
const Discord = require('discord.js');
const token = process.env.TOKEN
const prefix = process.env.PREFIX

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command)
}

client.on('ready', () => {
    client.user.setStatus("En train d'apprendre").catch(console.error)
	console.log("Let's go");
});

client.on('message', message => {
    if (message.author.bot || !message.content.startsWith(prefix) || !message.guild) return;

    message.client = client
    message.commands = client.commands

    let args = message.content.split(" ")
    let commandsname = args[0].replace(prefix,"").toLowerCase()
    if (client.commands.has(commandsname)){
        client.commands.get(commandsname).execute(message)
    }
})

client.login(token);