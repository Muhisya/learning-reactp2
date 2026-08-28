# Apa Itu React Router?

## Definisi React Router
**React Router** adalah *library* (pustaka) populer yang membantu kita menangani navigasi di dalam aplikasi React. 

Pustaka ini memungkinkan aplikasi React menciptakan pengalaman **Single Page Application (SPA)**. Dengan SPA, navigasi antar-halaman (*route*) dapat dilakukan secara instan tanpa membuat *browser* melakukan muat ulang halaman secara penuh (*full page reload*).

---

## Analogi 🏢

Untuk memahami cara kerja React Router dan SPA, mari bayangkan sebuah **gedung sekolah**:

* **Lantai 1** $\rightarrow$ Halaman `Home`
* **Lantai 2** $\rightarrow$ Halaman `Profile`
* **Lantai 3** $\rightarrow$ Halaman `About`

Ketika Anda ingin berpindah dari Lantai 1 ke Lantai 2:
```
Lantai 1  ──(Berpindah)──>  Lantai 2
```
Kita **tidak menghancurkan sekolah dan membangun gedung baru**. Kita hanya berjalan dan berpindah ke bagian ruangan yang berbeda di dalam gedung yang sama.

---

## Cara Kerja SPA (Single Page Application)

Begitu juga dengan aplikasi React yang menggunakan React Router:

```
    Aplikasi React (Gedung Utama)
                 │
                 ▼
     Tetap Berjalan di Browser
                 │
                 ▼
           Route Berubah
                 │
                 ▼
 Component yang Ditampilkan Berubah
```

* **Tanpa React Router:** Setiap kali klik menu, *browser* akan mengunduh ulang seluruh file website dari awal (seperti meruntuhkan dan membangun ulang gedung).
* **Dengan React Router:** Aplikasi React tetap berjalan di *browser*, dan hanya komponen di dalam layar yang berganti sesuai dengan URL yang dituju.
