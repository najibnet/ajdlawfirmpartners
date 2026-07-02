# AJD Law Firm CMS (Sveltia CMS Setup)

Selamat! Direktori ini (`/cms`) berisi solusi **CMS 100% Gratis Selamanya** yang ramah pengguna (user-friendly) untuk mengelola artikel website AJD Law Firm tanpa mengubah performa kilat, SEO prima, atau biaya hosting.

---

## 🏗️ Cara Kerja Sistem (Arsitektur)

Sistem ini menggunakan konsep **Git-based Headless CMS**:
1. **Panel Admin (`/cms/admin/`)**: Antarmuka visual yang berjalan langsung di browser klien. Di sini, klien Anda dapat menulis artikel dengan editor teks kaya (Rich Text Editor/WYSIWYG), memilih kategori, tanggal, dan mengunggah gambar.
2. **Penyimpanan (GitHub)**: Saat klien mengeklik tombol **"Publish"**, CMS akan otomatis membuat file Markdown (`.md`) baru di folder `cms/articles/data/` dan menyimpan foto ke `assets/articles/` langsung di repositori GitHub Anda.
3. **Pemuatan Cepat & Dinamis (`/cms/artikel.html` & `/cms/articles/baca.html`)**: 
   * Halaman daftar artikel akan mengambil daftar file dari GitHub secara otomatis.
   * Halaman pembaca (`baca.html`) akan membaca file Markdown tersebut di browser pengunjung dan mengubahnya menjadi tampilan website yang indah secara instan menggunakan library parser ringan (`marked.js`).

---

## 🛠️ Cara Menguji Secara Lokal (Local Development)

Anda bisa menguji CMS ini di komputer Anda sebelum melakukan push ke GitHub:

1. Jalankan server lokal Anda:
   ```bash
   pnpm dev
   ```
2. Buka halaman daftar artikel di browser:
   [http://localhost:3000/cms/artikel.html](http://localhost:3000/cms/artikel.html)
3. Buka halaman Admin CMS:
   [http://localhost:3000/cms/admin/index.html](http://localhost:3000/cms/admin/index.html)
   * Karena Anda berjalan secara lokal, CMS otomatis aktif dalam **Local Dev Mode**.
   * Anda bisa menambah/mengubah artikel, dan filenya akan langsung tertulis di folder `/cms/articles/data/` komputer Anda!

---

## 🔑 Cara Mengaktifkan Login (Authentication) di Live Domain

Agar klien Anda bisa masuk ke `domainanda.com/cms/admin/` dan mengedit dari mana saja, Anda memerlukan layanan perantara login (OAuth Gateway) yang aman. 

Berikut adalah 2 pilihan gratis dan paling mudah:

### Pilihan 1: Menggunakan Sveltia CMS Login Helper (Sangat Direkomendasikan & Tercepat)
Sveltia CMS menyediakan server autentikasi gratis yang sangat mudah dihubungkan dengan GitHub:
1. Masuk ke akun GitHub Anda dan daftarkan **GitHub OAuth App** baru:
   * Pergi ke **Settings** -> **Developer Settings** -> **OAuth Apps** -> **New OAuth App**.
   * **Application Name**: `AJD Law Firm CMS`
   * **Homepage URL**: Isi dengan URL website Anda (misal: `https://ajdlawfirm.id` atau domain CNAME Anda).
   * **Authorization callback URL**: Isi dengan `https://api.sveltia.org/auth/callback`
   * Klik **Register application**.
2. Salin **Client ID** dan buat **Client Secret** baru.
3. Buka web [Sveltia CMS Auth Registry](https://api.sveltia.org/register) (layanan gratis Sveltia) dan daftarkan Client ID + Client Secret Anda di sana.
4. Perbarui `cms/admin/config.yml` Anda dengan menambahkan konfigurasi OAuth (petunjuk lengkap ada di dokumentasi Sveltia).

### Pilihan 2: Menggunakan Netlify (100% Gratis & Standar Industri)
Jika Anda menghubungkan repositori GitHub ini ke akun **Netlify** gratis:
1. Netlify menyediakan fitur gratis bernama **Netlify Identity** yang bertindak sebagai gerbang login aman tanpa server backend.
2. Cukup aktifkan **Netlify Identity** di dashboard Netlify Anda, pilih **Git Gateway**, dan sambungkan dengan GitHub.

---

## 🚀 Cara Menerapkan ke Halaman Utama (Produksi)

Jika Anda sudah puas menguji halaman di dalam folder `/cms/` dan ingin menjadikannya sebagai halaman utama website Anda:

1. **Ganti Halaman Artikel Utama**:
   * Pindahkan atau ubah isi dari file root `artikel.html` dengan kode yang ada di `cms/artikel.html`.
   * Sesuaikan baris prefix path di dalam file tersebut (hilangkan prefix `../` dan ganti menjadi `./` karena lokasinya sudah berada di folder root).
2. **Ganti Folder Articles**:
   * Pindahkan folder `baca.html` dan folder `data/` dari `cms/articles/` ke folder root `articles/` Anda.
   * Sesuaikan kembali baris prefix path di dalam `baca.html` agar mengarah ke level folder root yang benar.
3. **Pindahkan Admin CMS**:
   * Pindahkan folder `admin/` dari `cms/admin/` ke root website Anda (sehingga dapat diakses di `yourdomain.com/admin/`).
