let { Presence } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'main': 'MAIN MENU',
  'verify': 'VERIFY MENU',
  'absen': 'USER BOT',
  'prem': 'PREMIUM',
  'game': 'GAME MENU',
  'hari': 'DIARY MENU',
  'sticker': 'MAKER MENU',
  'admin': `ADMIN MENU ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
  'group': 'GROUP MENU',
  'anonchat': 'ANONYMOUS CHAT',
  'maker': 'TEXT MAKER',
  'download': 'DOWNLOADER',
  'anime': 'WIBU MENU',
  'kerang': 'KERANG AJAIB',
  'primbon': 'PRIMBON',
  'dewasa': 'NSFW MENU',
  'audio': 'VOICE CHANGER',
  'fun': 'FUN MENU',  
  'islam': 'ISLAM MENU',
  'quotes': 'QUOTES',
  'search': 'SEARCH MENU',
  'tools': 'TOOLS MENU',
  'nganu': 'NGANU:V',
  'jadibot': 'JADI BOT',
  'host': 'MODERATOR',
  'owner': 'OWNER BOT',
  'info': 'INFO MENU',
  'advanced': 'ADVANCED',
}
const defaultMenu = {
  before: `
*INC BOT IS BACK!!!✨*

╭──┈──「 *INFO* 」
│ Name: %me
│ Visit: https://msha.ke/incbot_official
│ Total user: %totalreg
│ Berjalan selama: %uptime
│ Time: %time WIB
│ Tanggal: %week %weton, %date
╰───────────────┈───  

*タ NAME: %name*
*タ Coin: %coin*
*タ XP: %totalexp*
*タ Role: %role*
*タ Limit: %limit*
*タ Level: %level*
*タ Warn: %warn / 4x Your Banned!*

\`\`\`🜙 Bot fast respon jika server tidak sibuk dan sinyal mendukung\`\`\`

⎙Caption:
Dont! Spam, VidCall/Call = *Block + Banned!*

%readmore`.trimStart(),
  header: '┌─ *「 %category 」*',
  body: '│ %cmd',
  footer: '╰─┈───\n',
  after: `
Thanks To:
➥ Allah Swt.
➥ Kedua Ortu
➥ Zeroz04n
➥ Everyone who always supports

${'```%npmdesc Powered by Its Tamz```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  await conn.updatePresence(m.chat, Presence.composing) 
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { coin, exp, limit, warn, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let Tama = fs.readFileSync('./src/ok.jpg')
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let islamicDate = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        owner: plugin.owner,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isLimit/g, menu.limit ? '*(Limit)*' : '')
                .replace(/%isPremium/g, menu.premium ? '*(Premium)*' : '')
                .replace(/%isOwner/g, menu.owner ? '*(Owner)*' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, warn, limit, coin, name, weton, week, date, islamicDate, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    conn.send3ButtonImg(m.chat, Tama, text.trim(), '© Inc Bot', 'Source Code❓', '.github', 'Donasi', '.donasi', 'Another Bot', '.anbot', m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^allmenu|menu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 5

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(5000)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
