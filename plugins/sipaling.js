let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, participants, usedPrefix }) => {
  await conn.updatePresence(m.chat, Presence.composing)
    if (!text) throw `contoh:\n${usedPrefix}paling cantik`
    let member = participants.map(u => u.jid)
    let cakep = member[Math.floor(Math.random() * member.length)]
    let jawab = `Yang paling ${text} disini adalah @${cakep.replace(/@.+/, '')}`.trim()
    let mentionedJid = [cakep]
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
}
handler.help = ['paling <teks>']
handler.tags = ['fun']
handler.command = /^(paling|sipaling)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler