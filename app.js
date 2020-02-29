const fs = require('fs')
const Discord = require('discord.js')
const { prefix, token } = require('./config.json')
const client = new Discord.Client()
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command)
}

client.once('ready', () => {
  console.log('Esquilo Manco Praises the Sun!')
})

client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(' ')
  const command = args.shift().toLowerCase()

  if (command == 'ping') client.commands.get('ping').execute(message)

  if (command == 'create-table') client.commands.get('create-table').execute(message, args)

  if (command == 'roll' || command == 'r') client.commands.get('dices').execute(message, args)
})

client.login(token)
