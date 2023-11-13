const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
    console.log('User is ready');
    const channel = client.channels.fetch(CHANNEL) 
    for (let i = 5; i >= 0; i--) {channel.send(Math.random().toString(36).substr(2, 7))}
})

client.login(process.env.TOKEN)