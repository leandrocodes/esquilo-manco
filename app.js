const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require('./config.json')

client.once('ready', () => {
  console.log('Esquilo Manco Praises the Sun!')
})

client.on('message', message => {
  console.log(message.content)
  if (message.content == `${prefix}ping`) message.channel.send('Pong.')
})

client.on('message', message => {
  console.log(message.content)
  if (message.content == `${prefix}pong`) message.channel.send('Ping.')
})

client.login(token)
