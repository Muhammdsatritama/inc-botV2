let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing)
  let txt = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => `${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  conn.reply(m.chat, 'List Groups:\n' + txt, m)
}
handler.help = ['grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

