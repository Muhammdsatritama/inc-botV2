//follow github gwehj bang

let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  await conn.updatePresence(m.chat, Presence.composing)
let info = `
Pengen pake Script ini? Klik link dibawah, jangan lupa Follow dan give a star yaa

https://github.com/muhammdsatritama/inc-bot
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Jangan lupa Follow Githubnya', 'status@broadcast')
}
handler.command = /^script|sc$/i

module.exports = handler