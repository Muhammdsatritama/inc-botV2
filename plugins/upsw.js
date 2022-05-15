const colors = [
    0xff000000
]

let handler = async (m, { conn, text }) => {
    let _m = Promise.resolve({ key: { id: '' }})
    if (!m.quoted && !text) throw 'reply pesan atau sebagai argumen'
    if (m.quoted && m.quoted.mtype !== 'conversation' && !text) _m = m.quoted.forward('status@broadcast')
    if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = conn.sendMessage('status@broadcast', {
        text: m.quoted.text,
        textArgb: 0x00ffff,
        backgroundArgb: pickRandom(colors)
    }, 'extendedTextMessage')
    if (!m.quoted && text) _m = conn.sendMessage('status@broadcast', {
        text,
        textArgb: 0xffffffff,
        backgroundArgb: pickRandom(colors)
    }, 'extendedTextMessage')
    if (m.quoted && text) _m = conn.forwardMessage('status@broadcast', await m.quoted.cMod('status@broadcast', text))
    m.reply((await _m).key.id)
}
handler.help = ['upsw [text] (Reply Media)', 'upsw <text>']
handler.tags = ['']
handler.owner = true

handler.command = /^upswp$/i

module.exports = handler

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}