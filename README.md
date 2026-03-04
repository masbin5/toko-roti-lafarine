# La Farine — Website Toko Roti Artisan

Website modern untuk toko roti artisan, dibangun sebagai static HTML siap deploy ke Vercel.

## Fitur Lengkap

- 🏠 **Hero Section** — Animasi halus, visual SVG roti, CTA yang kuat
- 🎠 **Marquee Banner** — Infinite scroll highlight produk
- 📖 **About Section** — Kisah toko, statistik, keunggulan
- 🛒 **Toko / Menu** — 12 produk, filter kategori, tambah ke keranjang
- ⭐ **Produk Unggulan** — Banner spesial sourdough dengan CTA
- 💬 **Testimonial** — 6 ulasan pelanggan dengan animasi
- 📋 **Form Pemesanan** — Langsung kirim ke WhatsApp
- 🛍️ **Keranjang Belanja** — Sidebar dengan localStorage, ubah qty, checkout ke WA
- 📱 **Fully Responsive** — Mobile & desktop
- ✨ **Custom Cursor** — Animasi cursor unik
- 🌊 **Scroll Reveal** — Animasi elemen saat scroll
- 🎨 **Desain Artisan** — Palet warm, Playfair Display + Lato

## Cara Deploy ke Vercel

### Opsi 1: Drag & Drop (Termudah)
1. Buka [vercel.com](https://vercel.com) dan login
2. Klik **"Add New Project"**
3. Drag folder `toko-roti` ke browser
4. Klik **Deploy** — selesai! 🎉

### Opsi 2: GitHub
1. Upload folder ini ke repo GitHub baru
2. Di Vercel, klik **"Import Git Repository"**
3. Pilih repo, klik **Deploy**

### Opsi 3: Vercel CLI
```bash
npm i -g vercel
cd toko-roti
vercel
```

## Kustomisasi

Edit `index.html`:

| Hal | Cara Edit |
|-----|-----------|
| Nama toko | Cari `La Farine`, ganti semua |
| Nomor WA | Cari `6281234567890`, ganti |
| Produk | Edit array `products` di `<script>` |
| Warna | Edit variabel CSS di `:root` |
| Alamat | Edit di section footer |

## Struktur File

```
toko-roti/
├── index.html      ← Semua halaman (HTML + CSS + JS)
├── vercel.json     ← Konfigurasi Vercel
└── README.md       ← Dokumentasi ini
```
