let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
    if (!(args[0] || args[1])) throw `contoh:\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja\n\ngunakan ${userPrefix}listsurah untuk mengetahui daftar surah`

    let res = await fetch(global.API('https://islamic-api-indonesia.herokuapp.com', '/api/data/quran', { surah: args[0], ayat: args[1] }))
    let json = await res.json()
    let mes = `${json.result.data.text.arab}
    
${json.result.data.translation.id}

( Q.S ${json.result.data.surah.name.transliteration.id} : ${json.result.data.number.inSurah} )`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, json.result.data.audio.primary, 'all.mp3', '', m, false, { mimetype: 'audio/mp4' })
}

handler.help = ['alquran *114 1*']
handler.tags = ['islam']
handler.command = /^(alquran)$/i
handler.register = true
module.exports = handler