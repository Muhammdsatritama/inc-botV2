//tadinya iseng, eh malah work
let handler  = async (m, { conn, usedPrefix: _p }) => {
const { MessageType,Presence } = require('@adiwajshing/baileys')
 
conn.updatePresence(m.chat, Presence.recording)
	    conn.sendFile(m.chat, 'src/makasih.opus', 'tts.opus', null, m, true)
}
handler.customPrefix = /^(makasih|makasii|makasi|tq|terimakasih|terima kasih|tq|thx|tengs|tengkyu)/i
handler.command = new RegExp
module.exports = handler