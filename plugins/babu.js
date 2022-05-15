let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, isAdmin }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
  if (m.fromMe) throw 'Nggak'
  if (isAdmin) throw 'Padahal udah jadi admin'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
