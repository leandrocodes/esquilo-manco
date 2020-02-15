module.exports = {
  name: 'create-table',
  description: 'Cria uma tabela!',
  execute(message, args) {
    if (!args.length) return message.channel.send(`Você não especificou nenhum nome para a mesa, ${message.author}!`)
    else {
      const tableName = args.join(' ')
      message.channel.send(`Você criou uma mesa de RPG com o seguinte nome: ${tableName}`)
    }
  }
}
