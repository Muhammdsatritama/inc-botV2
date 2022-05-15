let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  await conn.updatePresence(m.chat, Presence.composing)
  if (!text) throw 'Tidak ada teks'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <@nomor>']
handler.tags = ['tools']

handler.command = /^mention$/i

handler.register = false

module.exports = handler
