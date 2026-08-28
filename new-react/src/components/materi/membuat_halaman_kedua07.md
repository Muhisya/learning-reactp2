# Membuat Halaman Kedua

Setelah berhasil membuat halaman utama, sekarang kita akan belajar cara menambahkan halaman kedua pada aplikasi React kita menggunakan React Router.

---

## Langkah 1: Buat Komponen Halaman Baru

Pertama, buatlah file komponen baru bernama `About.jsx` di dalam folder proyek Anda, lalu masukkan kode sederhana berikut:

```jsx
function About() {
  return <h1>Halaman About</h1>;
}

export default About;
```

---

## Langkah 2: Daftarkan Halaman di File Router

Selanjutnya, buka kembali file `router.jsx` Anda. Kita perlu mengimpor komponen `About` yang baru saja dibuat, lalu menambahkannya ke dalam daftar susunan rute (*array configuration*):

```jsx
import { createBrowserRouter } from "react-router";
import Home from "./Home";
import About from "./About"; // 1. Import komponen halaman About

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",        // 2. Tentukan URL untuk halaman kedua
    element: <About />,    // 3. Tentukan komponen yang ditampilkan
  },
]);
```

---

## 🧭 Memahami Pemetaan URL Aplikasi

Sekarang, kamu dapat mulai memahami inti dari cara kerja React Router. Aplikasi kita sudah memiliki dua pintu masuk URL yang berbeda:

* Jika pengguna mengakses URL **`/`**
  $$\downarrow$$
  Aplikasi akan merender komponen **`Home`**

* Jika pengguna mengakses URL **`/about`**
  $$\downarrow$$
  Aplikasi akan merender komponen **`About`**

Setiap kali URL di atas berubah, React Router secara otomatis mencocokkannya dan menukar komponen yang tampil di layar tanpa melakukan *reload* halaman!
