let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
  await conn.updatePresence(m.chat, Presence.composing)
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + (await conn.groupInviteCode(m.chat)), m)
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler

