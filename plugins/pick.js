let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { text, args, participants }) => {
  await conn.updatePresence(m.chat, Presence.composing)
    if (args[0] < 0, args.length < 2) throw 'Example: #pick 15 gay'
    let users = participants.map(u => u.jid)
    m.reply(`*Kamu Terpick sebagai ${text.replace(args, '').trimStart()}*
    
${new Array(Math.min(users.length, args[0])).fill().map(() => {
    let index = Math.floor(Math.random() * users.length)
    return `@${users.splice(index, 1)}`
}).join`\n`.replace(/@s.whatsapp.net/g,'')}`)
}
handler.help = ['pick <jumlah> <teks>']
handler.tags = ['group']
handler.command = /^pick/i

module.exports = handler