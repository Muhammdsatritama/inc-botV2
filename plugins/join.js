let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.25
        var now = new Date() * 1
        if (now < global.db.data.chats[m.chat].expired) global.db.data.chats[m.chat].expired += jumlahHari
        else global.db.data.chats[m.chat].expired = now + jumlahHari
    })
    conn.reply(res.gid, `
Hai semua👋🏻 Aku adalah *${conn.user.name}* Sebuah robot whatsapp yang diundang oleh @${m.sender.split`@`[0]}_. Silahkan ketik *#menu*
`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['prem']

handler.command = /^join$/i
handler.premium = true
handler.register = false

module.exports = handler