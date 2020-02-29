const { DiceRoller } = require('rpg-dice-roller/lib/umd/bundle')
const roller = new DiceRoller()
module.exports = {
    name: 'dices',
    description: 'Roll a RPG Dice!',
    execute(message, args) {
        const esquilo = message.guild.roles.find(role => role.name === 'Esquilo')
        if (message.member.roles.has(esquilo.id)) {
            // TODO: ADICIONAR VERIFICAÇÕES DE DADOS
            if (!args.length) return message.channel.send(`Você não especificou nenhum dado para jogar, ${message.author}!`)
            // TODO: MELHORAR O HELP
            else if (args == 'help') {
                return message.channel.send(`Para rodar um dado, é só passar como parâmetro para o comando "!roll" com quantas vezes você deseja rodar, seguido da letra "d" e do número de faces. Por exemplo: **!roll 3d8** `)
            }
            
            const dice = args.join()
            let roll = roller.roll(dice)
            message.channel.send(`${message.author} jogou o(s) dado(s) ${roll}`)
        }
    }
}
