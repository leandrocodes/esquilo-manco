module.exports = {
  name: 'ping',
  description: 'Ping!',
  execute(message) {
    let mestreRPG = message.guild.roles.find(role => role.name === 'Esquilo')
    if (message.member.roles.has(mestreRPG.id))
        message.channel.send('Pong.')
    else 
        message.channel.send('Me parece que você não pode usar isso...')
  }
}
