const Discord = require('discord.js')
const Functions = require(`../functions.js`)
let fn = new Functions()

exports.run = ( /** @type {Discord.Client} */ client, /** @type {Discord.Message} */ message, args) => {
    let limit = 50
    let d = 10

    let amt = fn.checkNull(args[0], d)

    // parseInt(`string`) = NaN
    if (parseInt(amt) === NaN) return message.reply(`O Argumento precisa ser um numero`)
    if (d > 50) return message.reply(`Limite de tentativas: ${50}`)

    let voice = message.member.voice

    if (!voice) return message.reply(`Voce nao esta em um canal de voz`)

    let i = 0;
    join()

    function join() {
        voice.channel.join()
            .then(() => {
                voice.channel.leave()
                setTimeout(() => {
                    i++
                    if (i >= amt) return console.log(`Fim do spam: ${amt}`)
                    join()
                }, 300)
            })
            .catch(err => console.error(err))
    }
}