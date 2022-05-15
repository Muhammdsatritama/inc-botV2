// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing)
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Wangy-wangy:v', m)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^neko$/i

module.exports = handler