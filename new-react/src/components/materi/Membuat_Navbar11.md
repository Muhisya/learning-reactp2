# Panduan Memulai: Membuat Navbar dengan React Router

Halo! Pada materi ini, kita akan belajar bagaimana cara membuat komponen **Navbar** (Navigasi) menggunakan React Router agar pengguna bisa berpindah halaman dengan mudah.

---

## 🚀 Kode Lengkap Navbar

Silakan gabungkan dan gunakan struktur kode di bawah ini untuk membuat komponen Navbar kamu:

```jsx
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
```

Setelah komponen ini dibuat, jangan lupa untuk **memasang dan menggunakannya pada halaman utama** aplikasi React kamu.

---

## 💡 Konsep Penting (Wajib Tahu!)

Untuk tahap awal ini, kamu cukup memahami satu aturan dasar berikut:

### `<Link>` Pindah Route

* **Fungsi Utama:** Tag `<Link>` digunakan sebagai pengganti tag `<a>` standar HTML.
* **Cara Kerja:** Ketika diklik, ia akan langsung mengarahkan pengguna untuk **pindah route** (berpindah halaman) secara cepat tanpa perlu memuat ulang (*reload*) seluruh halaman web.