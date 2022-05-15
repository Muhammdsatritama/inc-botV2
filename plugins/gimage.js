let { Presence } = require('@adiwajshing/baileys')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  await conn.updatePresence(m.chat, Presence.composing)
  if (!text) throw 'Cari apa?'
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'gimage', `
*── 「 RESULT GOOGLE IMAGE 」 ──*

${text}
➸ *width*: ${width}
➸ *height*: ${height}

\`\`\`© Inc Bot\`\`\`
`.trim(), m)
}
handler.help = ['gimage <req>']
handler.tags = ['search']
handler.command = /^(gimage)$/i
handler.register = true

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
