let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix }) => {
  await conn.updatePresence(m.chat, Presence.composing)
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${usedPrefix}mulaivote* - untuk memulai vote`
    delete conn.vote[id]
    m.reply(`Done!`)

}
handler.help = ['hapusvote']
handler.tags = ['absen', 'admin']
handler.command = /^(delete|hapus)vote$/i
handler.group = true
handler.admin = true
module.exports = handler