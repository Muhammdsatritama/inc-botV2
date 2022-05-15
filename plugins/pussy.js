let { Presence } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
   try {
conn.sendFile(m.chat, 'https://api-zynfx.my.id/api/nsfw/pussy', 'pussy.jpg', 'Hadeh...\n\n© Inc Bot', m)
    } catch{
      throw erorlink
    }
  }
handler.help = ['pussy']
handler.tags = ['dewasa']
handler.command = /^pussy$/i
handler.limit = true
handler.register = true
handler.premium = true

module.exports = handler