# Panduan Login CMS untuk Klien

## Cara Login dengan Access Token (Direkomendasikan)

### Langkah 1: Klien Buat GitHub Personal Access Token

1. Buka **github.com** dan login
2. Klik foto profil → **Settings**
3. Di sidebar kiri, scroll ke bawah → **Developer settings**
4. Klik **Personal access tokens** → **Fine-grained tokens**
5. Klik **Generate new token**
6. Isi:
   - **Token name**: `AJD Law Firm CMS`
   - **Expiration**: pilih `90 days` atau sesuai kebutuhan
   - **Resource owner**: pilih akun Anda (najibnet)

7. **Repository access**: pilih `Only select repositories` → pilih `ajdlawfirmpartners`

8. **Permissions** → **Contents**: pilih `Read and write`

9. Klik **Generate token** dan **SALIN** token-nya (hanya muncul sekali!)

### Langkah 2: Klien Login ke Sveltia CMS

1. Buka `/admin/` di website (contoh: `ajdlawfirm.id/admin/`)
2. Klik **"Sign In Using Access Token"**
3. Masukkan:
   - **Token**: paste token dari langkah 1
4. Klik **Sign In**

---

## Keterangan

### Kenapa Token Lebih Baik?

| GitHub Login | Access Token |
|-------------|--------------|
| Butuh setup OAuth | Langsung bisa |
| Perlu jadi collaborator | Tidak perlu |
| Login dengan password | Login dengan token |

### Keamanan Token

- Token bisa di-revoke kapan saja
- Bisa buat token baru jika perlu
- Tidak perlu bagi password GitHub

### Catatan Penting

- Token bersifat **RAHASIA**, jangan share di tempat publik
- Token memiliki masa berlaku (bisa set 90 hari / 1 tahun)
- Jika token expire, buat token baru
