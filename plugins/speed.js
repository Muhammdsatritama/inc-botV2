let { Presence } = require('@adiwajshing/baileys')
let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
  await conn.updatePresence(m.chat, Presence.composing)
  let old = performance.now()
  await m.reply('_Testing speed..._')
  let neww = performance.now()
  let speed = neww - old
  let txt = `
*Merespon dalam ${speed} millidetik*
`.trim()
  m.reply(txt)
}
handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|p|pg|sp)$/i
handler.limit = false
handler.register = true
module.exports = handler
