# Komponen Link dalam React Router

Materi ini akan membahas cara membuat menu navigasi aktif yang memungkinkan pengguna berpindah halaman secara instan tanpa memuat ulang (*reload*) browser.

---

## 1. Import Komponen Link

Untuk menggunakan fitur navigasi dari React Router, kita harus mengimpor komponen `Link` terlebih dahulu di bagian atas file komponen kita:

```jsx
import { Link } from "react-router";
```

---

## 2. Implementasi pada Komponen Home

Buka kembali file `Home.jsx`, lalu perbarui kodenya agar memiliki tombol navigasi yang mengarah ke halaman *About* seperti berikut:

```jsx
import { Link } from "react-router";

function Home() {
  return (
    <>
      <h1>Halaman Home</h1>

      {/* Gunakan properti 'to' untuk menentukan URL tujuan */}
      <Link to="/about">
        Ke About
      </Link>
    </>
  );
}

export default Home;
```

---

## 🧭 Memahami Alur Navigasi Link

Ketika pengguna berinteraksi dengan halaman, berikut adalah alur proses yang terjadi di balik layar:

```
          Halaman Home (Pengguna berada di sini)
                        │
                        ▼
             Klik Tombol "Ke About"
                        │
                        ▼
          URL Berubah Menjadi `/about`
                        │
                        ▼
Halaman `About` Ditampilkan Tanpa Full Page Reload!
```

Dengan menggunakan komponen `<Link>`, React Router hanya akan menukar komponen di layar secara instan, menghemat kuota internet, dan memberikan pengalaman aplikasi yang sangat cepat bagi pengguna.
