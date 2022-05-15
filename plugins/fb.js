let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
  if (!args[0]) throw 'Linknya mana kak?'
  let res = await fetch(global.API('xteam', '/dl/fb', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { name, author, description, uploadDate, duration, url, isFamilyFriendly, genre, keywords, contentSize, videoQuality, commentCount } = json.result
  let { name: authorname, url: authorlink } = author || {}
  let dateConfig = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  let unknown = '_Unknown_'
  let none = '_None_'
  let caption = `
Konten${isFamilyFriendly ? ' ' : ' *Tidak* '}Family Friendly
Post oleh ${name} (${authorname || ''}) (${authorlink || ''})
Diposting pada ${new Date(uploadDate).toLocaleDateString('id', dateConfig)}
Size: ${contentSize || unknown}
Durasi: ${clockString(+ new Date(duration))}
Genre: ${genre || none}
Kualitas: ${videoQuality ? videoQuality : unknown}

${description}

Keyword: ${keywords || none}
`.trim()
  for (let { data: url, type } of data)
    conn.sendFile(m.chat, url, 'fb' + (type == 'video' ? '.mp4' : '.jpg'), caption, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['download']
handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

handler.register = true
handler.limit = true

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
