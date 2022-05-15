let { Presence } = require('@adiwajshing/baileys')
const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  await conn.updatePresence(m.chat, Presence.composing) 
  if (!text) throw 'Soalnya mana?'
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•━━━━━━━━━━━━━━━━━━━━•\n\n')
  m.reply(answer)
}
handler.help = ['brainly']
handler.tags = ['search']

handler.command = /^brainly$/i

handler.register = false

module.exports = handler
