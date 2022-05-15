let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
    if (!text) throw 'masukan pesan yg mau dicari!\ncontoh #caripesan Bot|5'
    let split = text.split`|`
    let result = await conn.searchMessages(split[0], m.chat, split[1], 1)
    if (result.messages.length > 0) {
        let total = result.messages.length
        let sp = total < Number(split[1]) ? `Hanya ditemukan ${total} pesan` : `Ditemukan ${total} pesan\nLiat nih, ada magic`
        m.reply(sp)

        result.messages.map( async ({ key }) => {
            let { remoteJid: _remoteJid, id: _ids } = key
            let _message = await conn.loadMessage(_remoteJid, _ids)
            conn.reply(m.chat, 'Nih pesannya', _message)
        })
    }
}

handler.help = ['caripesan <pesan>|<jumlah>']
handler.tags = ['search']

handler.command = /^caripesan/i
handler.register = true

module.exports = handler
