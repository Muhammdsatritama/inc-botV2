let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (!(id in conn.asahotak)) throw false
    let json = conn.asahotak[id][1]
    let ans = json.result.jawaban
    let clue = ans.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^ao$/i
handler.limit = true
module.exports = handler