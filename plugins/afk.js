let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { text }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
*「AWAY FROM KEYBOARD」*

 ⇨  ${conn.getName(m.sender)} SEKARANG AFK!
 ⇨  ALASAN ${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.register = false

module.exports = handler
