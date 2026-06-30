# AJD Law Firm — Website

Website statis (HTML/CSS/JS murni) untuk **AJD Law Firm — Andi Jamaro Dulung & Partners**.
Dirancang untuk di-_hosting_ di **GitHub Pages** tanpa proses build.

## Struktur Folder

```
/
├── index.html              → Beranda
├── tentang.html            → Tentang Kami
├── profil.html             → Profil advokat (bisa ditambah)
├── artikel.html            → Daftar artikel
├── hubungi.html            → Hubungi Kami (form + peta)
├── CNAME                   → Domain kustom GitHub Pages
├── articles/
│   ├── template-artikel.html  → Salin file ini untuk artikel baru
│   ├── artikel-1.html
│   ├── artikel-2.html
│   └── artikel-3.html
└── assets/
    ├── ajd-logo.jpg        → Logo firma
    ├── ajd-foto.jpg        → Foto pendiri
    ├── css/style.css       → Seluruh styling
    ├── js/main.js          → Header, footer, menu, tombol WhatsApp
    └── articles/           → Gambar thumbnail artikel
```

> **Header & footer dibuat otomatis** oleh `assets/js/main.js`. Anda cukup mengubah
> menu, nomor WhatsApp, dan info kontak di **satu file** itu, dan semua halaman ikut berubah.

---

## 1. Mengubah Nomor WhatsApp / Menu / Kontak

Buka `assets/js/main.js`:

- `WA_NUMBER` → ganti nomor WhatsApp (format internasional, mis. `6285760024770`).
- `LINKS` → daftar menu navigasi.
- Bagian `buildFooter()` → alamat, email, dan jam operasional di footer.

---

## 2. Menambah Artikel Baru (mudah)

1. Salin `articles/template-artikel.html` → ganti nama, mis. `articles/artikel-4.html`.
2. Buka file baru itu, lalu isi: judul, tanggal, kategori, gambar, dan isi paragraf
   (cari penanda `EDIT:` di dalam file).
3. Letakkan gambar thumbnail di `assets/articles/` (mis. `artikel-4.jpg`).
4. Buka `artikel.html`, salin satu blok `<!-- KARTU ARTIKEL -->`, tempel di paling atas
   daftar, lalu sesuaikan tautan, gambar, judul, dan ringkasannya.

Selesai. Tidak perlu menyentuh kode lain.

---

## 3. Menambah Advokat di Halaman Profil

Buka `profil.html`. Sudah tersedia **kartu template** bertanda `<!-- KARTU TEMPLATE -->`.
Salin satu kartu, lalu ganti foto, nama, jabatan, deskripsi, dan tag bidang praktik.
Letakkan foto advokat di `assets/` (mis. `assets/advokat-2.jpg`).

---

## 4. Mengaktifkan Form "Hubungi Kami" (Google Apps Script)

Form di `hubungi.html` mengirim data ke Google Apps Script (gratis, masuk ke email/Spreadsheet).

1. Buka <https://script.google.com> → **New Project**.
2. Tempel kode berikut, ganti `EMAIL_TUJUAN`:

   ```javascript
   function doPost(e) {
     var data = e.parameter;
     MailApp.sendEmail({
       to: "admin.ajdlawfirm@gmail.com",
       subject: "Pesan Baru dari Website — " + (data.nama || "Tanpa Nama"),
       body:
         "Nama: " + data.nama + "\n" +
         "Email: " + data.email + "\n" +
         "Telepon: " + data.telepon + "\n\n" +
         "Pesan:\n" + data.pesan
     });
     return ContentService.createTextOutput("OK");
   }
   ```

3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Salin URL yang muncul (diakhiri `/exec`).
4. Buka `hubungi.html`, cari `APPS_SCRIPT_URL` dan tempel URL tadi.

Selama URL belum diisi, form akan menampilkan pesan agar pengelola menyetelnya dulu.

---

## 5. Mengganti Peta Lokasi

Di `hubungi.html`, ganti `src` pada `<iframe>` peta dengan _embed link_ dari
Google Maps (Bagikan → Sematkan peta → salin `src`).

---

## Menjalankan secara lokal

```bash
pnpm install
pnpm dev      # buka http://localhost:3000
```
