let handler = async m => m.reply(`
╭─「 HARGA SEWA 」
│ Rp. 5,000 | 3 Hari
│ Rp. 10,000 | 7 Hari
│ ~Rp. 20,000~ Rp. 17,000 | 1 Bulan
╰────

Harga diatas merupakan harga hanya untuk *satu grup*. Jika ingin bot didalam grup secara permanen direkomendasikan untuk upgrade ke premium dengan ketik *#getprem*

Silahkan hubungi owner jika ingin Sewa Bot dengan mengetik *#owner*
`.trim()) // Tambah sendiri kalo mau
handler.command = /^(sewabot)$/i

module.exports = handler
