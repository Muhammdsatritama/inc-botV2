//hayo ngapain ð¦
let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix: _p }) => {
  await conn.updatePresence(m.chat, Presence.composing)
let info = `
â­â *ã INFORMASI WHATSAPP BOT ã*
â 
â â ï¸ Bot ini tidak berjalan 24jamâ
â 
â *ã dipersembahkan oleh: ã*
â mi.com
ââââââââââââââââââââ
â *ã disponsori oleh: ã*
â android.com
â https://linktr.ee/Zeroz04n
â https://linktr.ee/CallMeMstm
ââââââââââââââââââââ
â *ã dibuat oleh: ã*
â Nurutomo
â Zeroz04n
â Its Tamz
ââââââââââââââââââââ
â *ã Source code & Thanks to: ã*
â https://github.com/Nurutomo/wabot-aq
â https://api.xteam.xyz
â and other Contributions
â°ââââ

â­â *ã FEATURE BOT! ã*
â â­ââââââââ
â â XP
â â COIN
â â LIMIT
â â ROLE
â â LEVEL
â â°ââââââââ
â anti link group chat
â anti bug group chat
â anti bug troli message
â anti virus text
â automatic tendang!
â automatic blocked _(if called)_
â automatic banned _(if spam)_
â islamic menu
â game menu
â anonymous chat seperti ditelegram
â harian menu
â database message & media command
â jadi bot untuk pengguna (scan)
â downloader menu
â media & internet menu
â 
â and many more. in menu!
â°âââââââââââââââââââââ

â­âââââââââââââââââââââ
â _Jangan menggunakan simbol-simbol_
â _aneh supaya tidak terjadi error!_
â 
â _Semua command tanpa menggunakan tanda_
â *<  >* _dan_ *[  ]*
â°âââââââââââââââââââââ

â­âââââââââââââââââââââ
â Bot ini di buat dengan bahasa
â pemrograman Node.js / JavaScript,
â & Dijalankan menggunakan Termux.
â°âââââââââââââââââââââ

â­âââââââââââââââââââââ
â Dan Selalu ingat bahwa bot ini
â dalam proses pengembangan!
â jadi diharapkan anda dapat memakluminya
â jika bot terdapat banyak kekurangan.
ââââââââââââââââââââ
â diperingatkan juga yang menggunakan
â bot ini bukan hanya anda / grup anda
â jadi saya memohon agar bersabar jika
â terjadinya delay, Serta gunakan fitur
â yang tersedia dengan seperlunya.
â°âââââââââââââââââââââ

â­âââââââââââââââââââââ
â _Dukung kami dalam pembuatan BOT ini_
â _agar lebih terupdate dan tahan lama_
â _dengan melakukan donasi._
â 
â _donasi tidak akan membuatmu miskin kawan :)_
â°âââââââââââââââââââââ

â­âââââââââââââââââââââ
â *Ingat.!!!*
â Gunakan bahasa yang benar dan
â sesuai apa yang ada di menu yang
â sudah disiapkan.
â°âââââââââââââââââââââ


"Kesalahan 1 huruf saja bot tidak bisa menjawab."
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*YAHAHA HAYUKK*', 'status@broadcast')
}//terserah lu aja gpp
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
