# 🍞 La Farine — Website Toko Roti Artisan

Website modern untuk toko roti artisan **La Farine**, dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework. Desain warm & elegan dengan nuansa artisan bakery Prancis.

---

## ✨ Fitur-Fitur Website

### 🏠 Hero Section
Landing page dengan animasi masuk yang halus, ilustrasi SVG roti hand-crafted, tagline yang kuat, dan dua tombol CTA — *Lihat Menu* dan *Pesan Sekarang*.

### 🎠 Marquee Banner
Banner teks berjalan otomatis dan infinite yang menampilkan highlight produk dan keunggulan toko (tepung pilihan, bahan lokal, dipanggang segar, dll).

### 📖 About / Tentang Kami
Section kisah toko dengan ilustrasi oven, 4 poin keunggulan produk, dan statistik toko: 15+ tahun berdiri, 40+ varian roti, 2000+ pelanggan, rating 4.9 bintang.

### 🛒 Menu & Katalog Produk
- 12 produk lengkap dengan nama, deskripsi, harga, dan emoji visual
- Filter kategori: **Semua / Roti / Kue / Pastry / Spesial**
- Badge khusus produk: *Bestseller*, *Favorit*, *Baru*, *Limited*
- Tombol **Tambah ke Keranjang** dengan animasi konfirmasi

### ⭐ Featured / Produk Unggulan
Banner highlight khusus untuk produk andalan bulan ini — Sourdough 72 Jam — dengan tampilan harga coret dan tombol beli langsung.

### 💬 Testimoni Pelanggan
6 ulasan pelanggan dengan avatar, nama, bintang rating, dan animasi muncul saat di-scroll.

### 📋 Form Pemesanan
Form order lengkap dengan field: nama, nomor WA, email, alamat, pilihan produk, jumlah, metode pembayaran (Transfer/QRIS/COD), dan catatan tambahan. Setelah submit, pesanan otomatis dikirim ke **WhatsApp** pemilik toko dalam format pesan yang rapi.

### 🛍️ Keranjang Belanja (Cart Sidebar)
- Slide-in dari kanan saat diklik
- Tambah / kurangi / hapus item
- Hitung total harga otomatis
- Data tersimpan di `localStorage` — tidak hilang saat refresh
- Tombol checkout kirim ringkasan order ke WhatsApp

### 🔔 Toast Notification
Notifikasi pop-up di bawah layar setiap kali produk berhasil ditambahkan ke keranjang.

### 🖱️ Custom Cursor
Cursor kustom berbentuk titik emas dengan lingkaran, berubah warna dan membesar saat hover di atas link atau tombol.

### 📱 Fully Responsive
Tampilan menyesuaikan otomatis untuk semua ukuran layar — desktop, tablet, dan mobile. Navbar berubah jadi hamburger menu di layar kecil.

### 🌊 Scroll Reveal Animation
Elemen-elemen halaman muncul dengan animasi fade-in yang smooth saat pengguna scroll ke bawah.

---

## 🎨 Desain

| Elemen | Detail |
|--------|--------|
| **Palet Warna** | Krem, cokelat deep, emas, dan aksen rose |
| **Font Judul** | Playfair Display (serif elegan) |
| **Font Body** | Lato (bersih & mudah dibaca) |
| **Font Logo** | Dancing Script (kaligrafi) |
| **Tema** | Warm artisan bakery, terinspirasi boulangerie Prancis |

---

## 📁 Struktur File

```
toko-roti/
├── index.html      ← Struktur halaman (HTML)
├── style.css       ← Semua styling & animasi (CSS)
├── main.js         ← Logika keranjang, produk, form (JS)
├── vercel.json     ← Konfigurasi deploy Vercel
├── README.md       ← Dokumentasi ini
└── public/         ← Folder aset (gambar, ikon, dll)
```

---

## ⚙️ Kustomisasi

Edit langsung di file yang sesuai:

| Yang Ingin Diubah | File | Yang Dicari |
|---|---|---|
| Nama toko | `index.html` + `main.js` | `La Farine` |
| Nomor WhatsApp | `main.js` | `6281234567890` |
| Daftar produk & harga | `main.js` | array `products` |
| Warna tema | `style.css` | variabel `:root` |
| Teks alamat & kontak | `index.html` | section `footer` |
| Data testimoni | `main.js` | array `reviews` |