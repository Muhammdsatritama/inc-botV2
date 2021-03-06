let { Presence } = require('@adiwajshing/baileys')
let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing)
  let res = await fetch(global.API('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'cowo', m)
  await conn.sendFile(m.chat, json.result.female, '', 'cewe', m)
}
handler.help = ['ppcouple']
handler.tags = ['search']
handler.command = /^(pp(cp|couple))$/i
handler.limit = 2
handler.register = true

module.exports = handler
