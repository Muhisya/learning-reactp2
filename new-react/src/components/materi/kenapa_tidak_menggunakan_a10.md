# Kenapa Tidak Menggunakan <a>?

Dalam pemrograman web tradisional, kita sudah mengenal tag bawaan HTML untuk membuat tautan atau navigasi antar-halaman. Namun, dalam ekosistem React, kita disarankan menggunakan komponen khusus.

---

## ❓ Pertanyaan
HTML murni sudah memiliki tag jangkar (*anchor tag*) seperti berikut:
```html
<a href="/about">About</a>
```

> **"Lalu, kenapa React Router menyediakan komponen `<Link>` baru? Apa bedanya?"**

---

## 📊 Perbandingan Sintaksis

Secara penulisan, keduanya terlihat sangat mirip. Perbedaan utamanya terletak pada properti penunjuk alamat tujuan (`href` vs `to`):

| Fitur | HTML Biasa | React Router |
| :--- | :--- | :--- |
| **Sintaksis** | `<a href="/about">About</a>` | `<Link to="/about">About</Link>` |
| **Atribut** | Menggunakan `href` | Menggunakan `to` |

---

## ⚡ Perbedaan Cara Kerja

Alasan utama kita harus beralih ke `<Link>` untuk navigasi internal aplikasi React adalah cara kerja di balik layarnya:

### 1. Menggunakan Tag `<a>`
```
 Klik Tag <a>  ──>  Browser Mengunduh Ulang Halaman (Full Reload)  ──>  State Hilang
```
* Tag `<a>` memicu navigasi browser biasa.
* Browser akan meminta ulang seluruh aset website ke server.
* Menyebabkan layar berkedip (*blank* putih sekejap) dan menghapus seluruh data (*state*) yang sedang disimpan di memori React.

### 2. Menggunakan Komponen `<Link>`
```
 Klik <Link>  ──>  React Router Mencegah Reload  ──>  Komponen Berubah Instan
```
* Komponen `<Link>` memicu navigasi yang dikelola sepenuhnya oleh React Router.
* React Router akan mencegah aksi bawaan browser (*prevent default*), memotong proses unduh ulang, dan langsung menukar komponen di layar secara instan.
* Pengalaman **Single Page Application (SPA)** tetap terjaga dengan mulus tanpa adanya *page reload*.

---

## 💡 Kesimpulan Pembelajaran
* **Gunakan `<Link>`** untuk semua navigasi **internal** (halaman-halaman yang ada di dalam aplikasi React kita sendiri).
* **Gunakan `<a>`** hanya jika ingin mengarahkan pengguna ke website **eksternal** di luar aplikasi kita (contoh: membuka Google, Instagram, atau dokumentasi resmi library luar).