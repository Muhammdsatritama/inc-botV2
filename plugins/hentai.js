let { Presence } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
   try {
conn.sendFile(m.chat, 'https://api-zynfx.my.id/api/nsfw/hentai', 'henTAI.jpg', 'Hadeh birahi sama kartun:v\n\n© Inc Bot', m)
    } catch{
      throw erorlink
    }
  }
handler.help = ['hentai']
handler.tags = ['dewasa']
handler.command = /^hentai$/i
handler.limit = true
handler.register = true

module.exports = handler