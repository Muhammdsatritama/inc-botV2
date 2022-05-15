let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  await conn.updatePresence(m.chat, Presence.composing)
  if (!text) throw 'No Text'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', 'Here is your comment\n\n\`\`\`© Inc Bot\`\`\`', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['maker']

handler.command = /^(ytcomment)$/i
handler.register = true

module.exports = handler
