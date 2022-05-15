let ozan = require('node-fetch')
let handler =  async(m, { conn, args }) => {
  if (!args[0]) throw 'wheres your link?'
  let afkh = await ozan(global.API('https://api-zynfx.my.id', '/api/mediafire', {
    url: args[0]
  }))
  if (afkh.status !== 200) {
    afkh.text()
    throw afkh.status
  }
  let json = await afkh.json()
  if (!json.result) throw json
  let { title, size, link } = json.result
  let amanda = `
Name: ${title}
Size: ${size}MB
Url Download:
*(${link})*
`.trim()
  conn.sendFile(m.chat, url, 'mediafire.document', amanda, m)
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['download']
handler.command = /^(mediafire|mfire(dl)?)$/i
handler.limit = 10

module.exports = handler