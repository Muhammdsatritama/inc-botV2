//made by Tama X Ozan

let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix: _p }) => {
  await conn.updatePresence(m.chat, Presence.composing)
let rich = `
Name | Donate
_- Kafka | 25,000_
_- Icha | 10,000_
_- Atta | 10,000_
_- Kaina | 10,000_

Name Partner
_- Ozan | GeMa Bot_
_- Kafka | KaGe Bot_
_- Erlangga | Erl Bot_
_- Rival | Zynfx Bot_
`.trim()

conn.fakeReply(m.chat, rich, '0@s.whatsapp.net', 'Terimakasih telah mensupport bot kami', 'status@broadcast')
}//iyes
handler.help = ['crazyrich']
handler.tags = ['info']
handler.command = /^crazyrich$/i
handler.register = true

module.exports = handler
