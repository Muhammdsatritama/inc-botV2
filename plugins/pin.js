let { Presence } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
   try {
conn.sendFile(m.chat, 'https://vall.my.id/api/pinterest?query=', 'henTAI.jpg', 'Nih ngab\n\n© Inc Bot', m)
    } catch{
      throw erorlink
    }
  }
handler.help = ['pin']
handler.tags = ['search']
handler.command = /^pin$/i
handler.limit = true
handler.register = true

module.exports = handler