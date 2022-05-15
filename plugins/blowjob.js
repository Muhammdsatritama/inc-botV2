let { Presence } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
   try {
conn.sendFile(m.chat, 'https://api-zynfx.my.id/api/nsfw/blowjob', 'blwjb.jpg', 'Tobat ngab awokawok\n\n© Inc Bot', m)
    } catch{
      throw erorlink
    }
  }
handler.help = ['blowjob']
handler.tags = ['dewasa']
handler.command = /^(blowjob|blwjb)$/i
handler.limit = true
handler.register = true

module.exports = handler