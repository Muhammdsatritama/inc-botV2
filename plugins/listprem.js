/*
   Silahkan Di Pakek
   Tapi Bantu Rapihin :v
   Buatan: Miaweers
*/

let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing)
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `「 List Premium 」` + `\n` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i
handler.owner = true

module.exports = handler
