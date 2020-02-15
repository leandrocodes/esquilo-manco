const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require('./config.json')

client.once('ready', () => {
  console.log('Esquilo Manco Praises the Sun!')
})

client.on('message', message => {
  //console.log(message.content)

  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(' ')
  console.log(args)
  const command = args.shift().toLowerCase()

  if (command == 'ping') message.channel.send('Pong.')
  
  else if (command == 'create-table') {
    if (!args.length) return message.channel.send(`Você não especificou nenhum nome para a mesa, ${message.author}!`)
    else {
      message.channel.send(`Você criou uma mesa de RPG com o seguinte nome: ${args}`)
    }
  }

  // if (message.content == `${prefix}ping`) message.channel.send('Pong.')
  // else if (message.content == `${prefix}beep`) message.channel.send('Boop.')
  // else if (message.content == `${prefix}server`) message.channel.send(`${message.guild.name}, o melhor servidor de RPG da face da terra!`)
})

client.login(token)
