let {
  MessageType,
  Presence
} = require('@adiwajshing/baileys')
let moment = require ('moment-timezone')
let handler = async (m, {
  conn, participants, args
}) => {
  const rows = [{
    title: 'MENU',
    description: "To display all menu",
    rowId: "/menu"
  },
    {
      title: 'TICTACTOE',
      description: "Multiplayer Tic Tac Toe Game",
      rowId: "/ttt"
    },
    {
      title: 'TNC',
      description: "Terms & Conditions of This Bot",
      rowId: "/tnc"
    },
    {
      title: 'INFO',
      description: "WhatsApp Bot Information",
      rowId: "/info"
    },
    {
      title: 'OWNER',
      description: "This Bot Maker",
      rowId: "/owner"
    },
  ]

  const sections = [{
    title: "Choose One To Bring Up The Contents Of The Bot",
    rows: rows
  }]
  const button = {
    buttonText: 'Press To Select',
    description: `\`\`\`Hi,
    $ {ucapan()}\`\`\`\n\`\`\`Im a WhatsApp Robot\`\`\`\n\`\`\`Can Robots Help?\`\`\`\n\n*Here is the GeMa-Bot menu list*`,
    sections: sections,
    listType: 1
  }
  conn.updatePresence(m.chat, Presence.composing)
  await conn.sendMessage(m.chat, button, MessageType.listMessage)
}
handler.customPrefix = /((tampilk?an|show)(menu)?)/i
handler.command = new RegExp
module.exports = handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Good early days 🌚"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time > 10) {
    res = "Good afternoon"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 18) {
    res = "Good night"
  }
  return res
}