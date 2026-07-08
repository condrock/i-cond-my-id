# Cond Rock — Link Hub

Halaman link-in-bio statis untuk Cond Rock. Berisi foto profil, bio singkat, dan tautan ke layanan, blog, serta kontak.

**Live:** [https://condrock.eu.org](https://i.cond.my.id/)

## Struktur Project

```
condrock-linktree/
├── index.html      # markup utama + meta SEO & social sharing
├── css/style.css   # design system (dark navy/gold/teal)
├── js/main.js      # set tahun footer otomatis
└── robots.txt
```

## Fitur

- Kartu link: **Layanan Kami**, **Blog Pribadi**
- Tombol kontak: **WhatsApp**, **Telegram**
- Footer dengan tahun otomatis (JS) + link ke condrock.eu.org
- Dark mode, responsive (mobile-first), aksesibel (keyboard focus, alt text)
- SEO: meta tag, canonical, Open Graph, Twitter Card
- Tanpa build process — 100% HTML/CSS/JS statis

## Menjalankan Lokal

Cukup buka `index.html` di browser, atau jalankan local server, misalnya:

```bash
npx serve .
```

## Deploy ke GitHub Pages

1. Push seluruh isi folder ini ke branch `main` repo GitHub.
2. Aktifkan GitHub Pages di **Settings → Pages**, pilih branch `main` (root).
3. Halaman akan aktif di `https://<username>.github.io/<repo>/`.

## Menambah / Mengubah Link

Setiap link berada di `index.html` dalam elemen `<section class="links">`:

- Card besar: salin blok `<a class="card">`, ubah `href`, ikon (`card-icon`, pakai [Google Material Symbols](https://fonts.google.com/icons)), judul, dan sub-teks.
- Tombol kontak: salin blok `<a class="contact-btn">` di dalam `.contact-row`, ganti `href` dan ikon SVG.

## Kredit

Dibuat oleh **Cond Rock** — https://condrock.eu.org
