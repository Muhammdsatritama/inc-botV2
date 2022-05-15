let handler = async m => m.reply(`
╭─「 HARGA PREMIUM 」
│ Rp. 15,000 | 7 Hari
│ ~Rp. 25,000~ Rp. 20,000 | 1 Bulan
│ Rp. 26,900 | PERMANEN
╰────
╭─「 HARGA SEWA BOT 」
│ Rp. 5,000 | 3 Hari | 1 Grup
│ Rp. 10,000 | 7 Hari | 1 Grup
│ ~Rp. 20,000~ Rp. 17,000 | 1 Bulan | 1 Grup
╰────

Keuntungan upgrade Premium:
- Akses semua fitur (terutama fitur khusus premium)
- Masukan bot kedalam grup secara permanen
- Masukan ke semua grup tanpa batas
- Mendapat info terkini tentang update bot
- Tidak akan terbanned bila spam command
- Dapet pahala karena hasil biaya dari sewa/premium akan dipakai untuk membantu owner beli kuota :D

Silahkan hubungi owner jika ingin upgrade yaa
`.trim()) // Tambah sendiri kalo mau
handler.command = /^(getprem)$/i

module.exports = handler
