//wm Inc Bot by Tama

let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix: _p }) => {
  await conn.updatePresence(m.chat, Presence.composing)
let rules = `
Silahkan baca Rules dulu ya Kak👇🏻

1. Bot tidak 24 Jam Online
2. Beberapa fitur mungkin masih error dan tidak berfungsi
3. Bot fast respon jika kualitas internet bagus dan server mendukung
4. Menelpon bot Auto Block!!!
5. Jika bot On tapi tidak respon, Harap tunggu beberapa saat dan Ulangi perintah nya.
6. Dilarang spam! 

HAVE A NICE DAY KAK
`.trim()

conn.fakeReply(m.chat, rules, '0@s.whatsapp.net', '*PATUHI PERATURAN AGAR KAMU GAK KE BANNED*', 'status@broadcast')
}//iyes
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i
handler.register = true

module.exports = handler