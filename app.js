const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()

client.once('ready', () => {
  console.log('Esquilo Manco Praises the Sun!')
})

client.on('message', message => {
  console.log(message.content)
})

client.login(process.env.CLIENT_TOKEN)

