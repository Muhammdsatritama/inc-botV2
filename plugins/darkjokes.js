let { Presence } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
    conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'drag joles\n\n© Inc Bot',m)
}
handler.help = ['darkjokes']
handler.tags = ['search']
handler.command = /^(dragjoles|darkjokes)$/i
handler.register = true

module.exports = handler
