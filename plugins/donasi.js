let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  await conn.updatePresence(m.chat, Presence.composing) 

let donate = 'https://telegra.ph/file/46e1fc0682f812449f6f5.jpg'
let info = `

╭─「 Donasi • Pulsa 」
│ • Telkomsel [082211224927]
│ • Indosat [085759022133]
╰────
╭─「 Donasi • Non Pulsa 」
│ • Gopay [Telkomsel]
│ • Dana [Telkomsel]
│ • Ovo [Indosat]
│ • Cash:v
╰────

*Dengan donasi minimal 5k akan mendapat premium selama 3 hari
`.trim()

conn.sendFile(m.chat, donate, 'dongnet.jpg', info, m)
}
handler.command = /^dona(te|si)$/i

module.exports = handler