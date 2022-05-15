let fs = require('fs')
let handler = m => m

handler.all = async function (m) {
  let setting = global.db.data.settings

    // kalo kena tag
    try {
      if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
        await conn.send2button(m.chat, '_Iya kak, ada yang bisa *robot bantu?😊*_\n_Ketik *Tampilkan menu* untuk melihat *menu!*_'.trim(), '© Inc Bot | by Its Tamz', 'MENU', '/menu', 'DONASI', '/donasi')
      }
    } catch (e) {
      return
    }
    
    // kalo ada yang invite/kirim link grup dipribadi chat
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat.whatsapp.com/') || m.text.startsWith('Buka tautan ini untuk bergabung ke grup WhatsApp saya:') || m.text.startsWith('👥 undangan untuk bergabung ke grup whatsapp saya') || m.text.startsWith('👥 undangan grup whatsapp')) && !m.isBaileys && !m.isGroup) {
        this.reply(m.chat, `
*「Link Group Detected!」*

Silahkan sewa bot jika ingin memasukannya kedalam grup dengan mengetik *#sewabot* atau direkomendasikan upgrade ke premium dengan mengetik *#getprem*
`.trim(), m, { contextInfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
    }
    
    //salam
    let reg = /(assalamu'?alaikum|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`_WA'ALAIKUMSALAM WARAHMATULLAHI WABARAKATUH._`)
    }
    //manggil
    let zan = /(inc)/i
    let isOzan = zan.exec(m.text)
    if (isOzan && !m.isBaileys && !m.fromMe) {
       m.reply('Iya kak Inc Bot disini, ada yang bisa dibantu?\n_Ketik *Tampilkan menu* atau *#menu* untuk melihat daftar menu_')
    }
    //testing bot
    let tes = /(fykysitdiyydkyd)/i
    let isNgetes = tes.exec(m.text)
    if (isNgetes && !m.isBaileys) {
       m.reply('_Testing sukses ✓, Bot sedang aktif!_\n_Ketik *Tampilkan menu* untuk melihat *menu!*_')
    }
    
    /*if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Bot Aktif Selama ${uptime} | Mode: ${global.opts['self'] ? 'Private (untuk sendiri)' : 'Publik (untuk semua)'}`).catch(_ => _)
        setting.status = new Date() * 1
    }*/

}

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}