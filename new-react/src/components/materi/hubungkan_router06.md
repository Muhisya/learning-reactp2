# Menghubungkan Router ke Aplikasi React

Setelah membuat konfigurasi rute di file `router.jsx`, kita harus menghubungkannya ke berkas utama aplikasi. Ini adalah bagian krusial yang tidak boleh dilewatkan agar sistem navigasi dapat berjalan di browser.

---

## Konfigurasi pada `main.jsx`

Buka file **`src/main.jsx`**, lalu perbarui kodenya menjadi seperti berikut:

```jsx
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

---

## 🔍 Penjelasan Komponen

* **`RouterProvider`** adalah komponen (*Component*) khusus dari React Router yang bertugas memberikan dan menyebarkan seluruh konfigurasi rute kepada aplikasi React.
* Tanpa komponen ini, aplikasi React tidak akan pernah tahu URL apa saja yang tersedia dan komponen mana yang harus dirender.

---

## 🧭 Alur Data Navigasi

Mari kita lihat bagaimana konfigurasi rute ini bisa sampai dan diterapkan ke dalam aplikasi React:

```
      router.jsx       (Tempat kita menulis daftar URL dan Komponen)
           │
           ▼
        router         (Variabel objek konfigurasinya)
           │
           ▼
    RouterProvider     (Komponen penghubung di main.jsx)
           │
           ▼
       React App       (Aplikasi berhasil menggunakan sistem routing)
```

Dengan menyelesaikan langkah ini, proyek website Anda kini resmi menjadi aplikasi **Single Page Application (SPA)** yang siap dikembangkan lebih lanjut.
