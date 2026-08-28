# Masalah yang Ingin Diselesaikan oleh React Router

**React Router menyelesaikan masalah sinkronisasi antara URL browser dengan komponen yang tampil pada layar.** Tanpa routing, aplikasi React tidak bisa berpindah halaman secara natural seperti website pada umumnya.

Pertanyaan sekarang:

> *"Selama ini kalau kita membuat aplikasi React, bagaimana cara kita membuat halaman Home, About, dan Contact?"*

---

## Studi Kasus: Website Santri

Misalnya kita ingin membangun sebuah aplikasi bernama **Website Santri**. Website ini dirancang memiliki empat halaman utama dengan struktur URL sebagai berikut:

* **Home** $\rightarrow$ ` / `
* **About** $\rightarrow$ ` /about `
* **Profile** $\rightarrow$ ` /profile `
* **Contact** $\rightarrow$ ` /contact `

### Pertanyaan Inti

Saat pengguna mengetik atau mengklik tautan tersebut, muncul sebuah pertanyaan besar:

**Bagaimana React tahu Component mana yang harus ditampilkan ketika URL berubah?**

---

## Mengapa Kita Membutuhkan Routing?

Di sinilah kita membutuhkan **routing**. Tanpa adanya routing, aplikasi React akan mengalami kendala besar:

* **State Manual yang Rumit**: Kita harus menggunakan `useState` secara manual untuk menyembunyikan dan menampilkan komponen.
* **URL Tidak Berubah**: Pengguna tidak bisa menyalin (*copy*) tautan halaman spesifik atau menggunakan tombol kembali (*back button*) pada browser.

Dengan **React Router**, perpindahan halaman terasa sangat cepat karena hanya komponen yang diperlukan saja yang dimuat ulang tanpa melakukan *reload* penuh pada browser.
