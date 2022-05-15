// Made By github.com/TOXIC-DEVIL
let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  await conn.updatePresence(m.chat, Presence.composing)
  if (!text) throw `Masukkan judul musik!`
  let res = await fetch(global.API('zeks', '/api/spotify', { q: text }, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.data[0]) throw json
  let { title, artists, album, thumb, url, preview_mp3 } = json.data[0]
let spotifyinfo = `✨️ *Title:* ${title}
🗣️ *Artists:* ${artists}
🎆️ *Album:* ${album}
🌐️ *URL*: ${url}
💚️ *Direct URL:* ${preview_mp3}\n\n© Inc Bot`

  await conn.sendFile(m.chat, thumb, 'thumb.jpg', spotifyinfo, m)
  await conn.sendFile(m.chat, preview_mp3, 'spotify.mp3', spotifyinfo, m)
}
handler.help = ['spotify <query>']
handler.tags = ['search']
handler.command = /^(spotify|music)$/i
// Made By github.com/TOXIC-DEVIL
module.exports = handler