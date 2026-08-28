# Kita Butuh Navigasi

Setelah berhasil membuat dua halaman, sekarang muncul pertanyaan.

---

## 🙋‍♂️ Pertanyaan

> *"Kalau user sedang berada di halaman Home, bagaimana cara dia berpindah ke halaman About?"*

Untuk sementara waktu, mungkin akan mencoba berpindah halaman dengan cara:
1. Mengetik **`/about`** secara manual di kolom URL *browser*.
2. Menekan tombol **Enter**.

---

## 🛑 Masalah Utama

Meskipun cara mengetik manual di atas berhasil mengubah halaman, metode ini memiliki kelemahan besar:
* **Tidak Realistis:** Website yang sebenarnya tidak pernah meminta pengguna mengetik URL manual untuk berpindah halaman.
* **Pengalaman Pengguna Buruk:** Pengguna mengharapkan adanya menu navigasi visual yang tinggal diklik.

Sebuah aplikasi web yang profesional harus memiliki menu navigasi yang jelas di layar, contohnya:

```text
[ Home ]  |  [ About ]
```

---

## 💡 Solusinya: Komponen Link

Untuk mewujudkan menu navigasi yang interaktif dan dinamis tersebut, kita membutuhkan sebuah komponen khusus dari React Router yang bernama **`Link`**. 

Komponen `Link` inilah yang akan menggantikan tag HTML `<a>` tradisional, sehingga perpindahan halaman dapat terjadi secara instan tanpa memicu *full page reload* (muat ulang halaman secara penuh).
