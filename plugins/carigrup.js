let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
    if (!text) throw 'Cari group apa?'
    let res = await fetch(global.API('xteam', '/search/grupwa', {
        q: text
    }, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let teks = json.result.map(res => res.subject + '\n' + res.link).join('\n\n')
    m.reply(teks)
}
handler.help = ['carigrup <nama>']
handler.tags = ['search']

handler.command = /^carigrup/i
handler.register = true

module.exports = handler