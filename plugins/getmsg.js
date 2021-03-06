let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, usedPrefix, text }) => {
  await conn.updatePresence(m.chat, Presence.composing)
    let which = command.replace(/get/i, '')
    if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat list nya`
    let msgs = global.db.data.msgs
    if (!(text in msgs)) throw `'${text}' tidak terdaftar di list pesan`
    let _m = conn.serializeM(JSON.parse(JSON.stringify(msgs[text]), (_, v) => {
        if (
            v !== null &&
            typeof v === 'object' &&
            'type' in v &&
            v.type === 'Buffer' &&
            'data' in v &&
            Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
    // m.reply(`[debug]\n${require('util').format(_m)}`)
    await _m.copyNForward(m.chat, true)
}
handler.help = ['msg'].map(v => 'get' + v + ' <text>')
handler.tags = ['nganu']
handler.command = /^get(msg)$/
handler.register = true

module.exports = handler