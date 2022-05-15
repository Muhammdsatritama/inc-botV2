let { Presence } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  await conn.updatePresence(m.chat, Presence.composing) 

let github = fs.readFileSync('./src/github.jpg')
let Tama = `

Github Main:
- https://github.com/muhammdsatritama

Termux Wabot:
- https://github.com/muhammdsatritama/inc-bot

Coba coba aja:
- https://muhammdsatritama.github.io

Csv bot AutoResponder Menu 1
- https://github.com/muhammdsatritama/AR-script-1

Csv bot AutoResponder Menu 2 
- https://github.com/muhammdsatritama/AR-script-2

Csv bot AutoResponder Menu Game
- https://github.com/muhammdsatritama/AR-script-3

*Follow ngab jangan cuma baca*
`.trim()

conn.sendFile(m.chat, github, 'github.jpg', Tama, m)
}
handler.command = /^git|github$/i

module.exports = handler