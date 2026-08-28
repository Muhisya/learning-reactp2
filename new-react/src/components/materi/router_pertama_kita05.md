# Membuat Router Pertama Kita

Sekarang kita akan belajar cara membuat halaman sederhana menggunakan React Router dan menghubungkan URL ke komponen tertentu.

---

## Langkah 1: Buat Komponen Halaman
Pertama, kita buat komponen untuk halaman utama. Buatlah file baru bernama `Home.jsx` dan masukkan kode berikut:

```jsx
function Home() {
  return <h1>Halaman Home</h1>;
}

export default Home;
```

---

## Langkah 2: Konfigurasi Router
Selanjutnya, kita akan membuat konfigurasi *routing* untuk menentukan halaman apa yang muncul di URL tertentu. Buatlah file bernama `router.jsx` didalam folder `src` (atau sejajar dengan `main.jsx`) dan tulis kode berikut:

```jsx
import { createBrowserRouter } from "react-router";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
```

---

## 🔍 Memahami Properti Router

Di dalam konfigurasi di atas, terdapat dua properti utama yang wajib dipahami:

```javascript
{
  path: "/",
  element: <Home />,
}
```

### 1. `path`
Properti ini digunakan untuk **menentukan URL** halaman.
* Contoh `path: "/"` berarti halaman ini akan menjadi halaman utama (akar/root) dari website kita.
* Representasi URL: `https://website-kita.com/`

### 2. `element`
Properti ini digunakan untuk **menentukan komponen** yang akan ditampilkan ketika URL diakses.
* Contoh `element: <Home />` means komponen `Home` yang akan merender visual di layar pengguna.

### Alur Singkat:
```
  path         ──>       "/"
                           │
                           ▼
  element      ──>    <Home />
```
