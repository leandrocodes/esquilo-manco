module.exports = {
  name: 'create-table',
  description: 'Cria uma tabela!',
  execute(message, args) {
    let mestreRPG = message.guild.roles.find(role => role.name === 'Mestre')
    if (message.member.roles.has(mestreRPG.id)) {
      if (!args.length) return message.channel.send(`Você não especificou nenhum nome para a mesa, ${message.author}!`)
      else {
        const tableName = args.join(' ')
        message.channel.send(`Você criou uma mesa de RPG com o seguinte nome: ${tableName}`)
      }
    } else message.channel.send('Me parece que você não pode usar isso...')
  }
}
