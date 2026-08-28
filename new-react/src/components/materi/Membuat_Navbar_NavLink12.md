# Membuat Navbar dengan NavLink

Setelah kamu memahami penggunaan `<Link>` untuk berpindah halaman, sekarang kita akan mempelajari komponen navigasi lain yang lebih pintar, yaitu **NavLink**.

---

## 1. Kode Dasar NavLink
Mari kita lihat bagaimana cara menggunakan `<NavLink>` di dalam komponen `Navbar`:

```jsx
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>

      {" | "}

      <NavLink to="/about">
        About
      </NavLink>
    </nav>
  );
}
```

---

## 2. Apa Bedanya Link dan NavLink?

Secara sederhana, ini perbedaan utama keduanya:
* **Link** digunakan murni untuk berpindah halaman.
* **NavLink** digunakan untuk navigasi yang butuh tahu apakah halaman tersebut **sedang aktif** atau tidak.

---

## 3. Contoh Penggunaan Fitur Aktif

Satu kelebihan utama `NavLink` adalah kemampuannya untuk mendeteksi status aktif. Misalnya, kita ingin memberikan `class` khusus bernama `"active"` ketika sedang membuka halaman tersebut:

```jsx
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
  About
</NavLink>
```

> **Catatan:** Kamu tidak perlu pusing memikirkan cara *styling*-nya dulu ya. Cukup pahami konsepnya saja!

---

## 4. Kesimpulan untuk Diingat

Untuk tahap awal ini, kamu cukup mengingat poin penting berikut:

```text
Link
 ↓
Navigasi biasa (pindah halaman)

NavLink
 ↓
Navigasi + tahu route/halaman sedang aktif
```