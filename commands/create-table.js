const axios = require('../database/axios')
module.exports = {
  name: 'create-table',
  description: 'Cria uma tabela!',
  execute(message, args) {
    let mestreRPG = message.guild.roles.find(role => role.name === 'Mestre')
    if (message.member.roles.has(mestreRPG.id)) {
      if (!args.length) return message.channel.send(`Você não especificou nenhum nome para a mesa, ${message.author}!`)
      else {
        const tableName = args.join(' ')
        // TODO: Melhorar a disposição dos dados
        axios
          .post(`https://esquilo-manco.firebaseio.com/member/${message.member.id}/mesas.json`, {table: tableName})
          .then(() => {
            message.channel.send(`Você criou uma mesa de RPG com o seguinte nome: ${tableName}`)
          })
          .catch(err => {
            console.log(err)
          })
      }
    } else message.channel.send('Me parece que você não pode usar isso...')
  }
}
