# Mengambil ID dengan useParams()

## 🎯 Tujuan Pembelajaran
Setelah mempelajari materi ini, kamu diharapkan mampu:
* Memahami cara menangkap parameter dinamis dari URL.
* Menggunakan hooks `useParams` dari React Router di dalam komponen.

---

## 🧭 Masalah Baru: Bagaimana Komponen Tahu Isi URL?

Pada materi sebelumnya, kita sudah tahu bahwa *Dynamic Route* memungkinkan kita membuat satu rute fleksibel seperti `/profile/:id`. 

Namun, muncul pertanyaan penting:
> **"Kalau user membuka `/profile/25`, bagaimana cara komponen kita tahu bahwa ID yang sedang dibuka adalah 25?"**

Untuk menyelesaikan masalah ini, React Router menyediakan sebuah fungsi khusus (*hook*) bernama **`useParams()`**.

---

## 🛠️ Contoh Kode Implementasi

Silakan perhatikan dan pelajari struktur kode di bawah ini:

```jsx
import { useParams } from "react-router";

function ProfileDetail() {
  // Mengambil parameter 'id' dari URL
  const { id } = useParams();

  return (
    <>
      <h1>Detail Profile</h1>
      {/* Menampilkan ID yang ditangkap dari URL */}
      <p>ID: {id}</p>
    </>
  );
}

export default ProfileDetail;
```

---

## 🔄 Alur Kerja & Contoh Kasus

Fungsi `useParams()` akan membaca bagian dinamis pada URL (yang diawali tanda titik dua seperti `:id`) dan mengubahnya menjadi variabel yang bisa kita pakai di dalam HTML komponen.

Mari kita lihat contoh perubahannya secara langsung:

* **Jika URL yang dibuka:** `/profile/10`  
  ⬇️  
  Maka otomatis variabel **`id = 10`**

* **Jika URL yang dibuka:** `/profile/25`  
  ⬇️  
  Maka otomatis variabel **`id = 25`**

* **Jika URL yang dibuka:** `/profile/budi`  
  ⬇️  
  Maka otomatis variabel **`id = budi`**

---

## 🧠 Ringkasan Pendek
* `useParams()`
   ⬇️
* Mengambil data variabel (seperti ID) langsung dari URL yang sedang aktif.
