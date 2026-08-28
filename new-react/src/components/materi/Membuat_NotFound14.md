# Membuat Halaman NotFound (404)

Pada materi sebelumnya, kita sudah mempelajari konsep **Not Found (404)**. Sekarang, kita akan langsung mempraktikkan bagaimana cara membuat komponen halaman tersebut dan menghubungkannya ke dalam sistem navigasi aplikasi menggunakan React Router.

---

### 1. Membuat Komponen `NotFound`

Langkah pertama adalah membuat sebuah komponen React sederhana yang akan ditampilkan kepada pengguna ketika mereka tersesat atau mengetikkan alamat URL yang salah.

Buat file baru (misalnya `NotFound.jsx`) dan masukkan kode berikut:

```jsx
function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>
    </>
  );
}

export default NotFound;
```

---

### 2. Menambahkan Route Wildcard `*`

Agar aplikasi tahu bahwa komponen ini harus muncul saat rute tidak ditemukan, kita perlu mendaftarkannya menggunakan simbol rute khusus yaitu **wildcard (`*`)**.

Tambahkan objek konfigurasi rute berikut pada *router* Anda:

```javascript
{
  path: "*",
  element: <NotFound />,
}
```

---

### 3. Contoh Implementasi Penuh

Berikut adalah contoh bagaimana menyusun rute-rute di dalam aplikasi Anda menggunakan `createBrowserRouter`:

```jsx
import { createBrowserRouter } from "react-router";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
```

---

### 4. Cara Kerja Rute Wildcard

Setelah konfigurasi di atas diterapkan, mari kita lihat bagaimana sistem React Router mengarahkan pengguna berdasarkan URL yang mereka buka:

* `/`  ➜ **Home** (Rute cocok)
* `/about` ➜ **About** (Rute cocok)
* `/abc` ➜ **NotFound** (Tidak ada yang cocok, dilempar ke `*`)
* `/xyz` ➜ **NotFound** (Tidak ada yang cocok, dilempar ke `*`)
* `/apapun` ➜ **NotFound** (Tidak ada yang cocok, dilempar ke `*`)

> 💡 **Analogi Mudah:**
> Simbol bintang `*` di sini berarti: *"Jika tidak ada rute di atas yang cocok dengan URL yang dicari, maka otomatis masukkan pengguna ke halaman ini."* Ia bertindak seperti jaring penyelamat terakhir!
