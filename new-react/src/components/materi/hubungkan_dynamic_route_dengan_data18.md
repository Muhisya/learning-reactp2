# Modul Pembelajaran: Menghubungkan Dynamic Route dengan Data

## 📌 Tujuan Pembelajaran
Setelah mempelajari materi ini, diharapkan mampu memahami bagaimana **Dynamic Route** bekerja sama dengan data objek (state/mock data) untuk menampilkan informasi yang berbeda menggunakan satu komponen saja.

---

## 📁 1. Menyiapkan Sumber Data

Bayangkan kita memiliki data kelompok santri yang disimpan dalam sebuah objek JavaScript. Setiap santri memiliki nomor **ID** sebagai kunci pencariannya:

```javascript
const santri = {
  1: "Ahmad",
  2: "Ali",
  3: "Umar",
};
```

---

## 💻 2. Penulisan Komponen `ProfileDetail`

Kita akan menggunakan *hook* `useParams` untuk mengambil ID dari URL, lalu menggunakannya sebagai kunci untuk mengambil nama santri yang cocok dari data di atas.

```jsx
import { useParams } from "react-router";

// Data santri diletakkan di luar komponen (atau berasal dari file data terpisah)
const santri = {
  1: "Ahmad",
  2: "Ali",
  3: "Umar",
};

function ProfileDetail() {
  // 1. Ambil ID dari URL browser
  const { id } = useParams();

  // 2. Cari nama santri berdasarkan ID yang didapat
  const nama = santri[id];

  return (
    <>
      <h1>Profile Santri</h1>
      <p>Nama: {nama}</p>
      <p>ID: {id}</p>
    </>
  );
}

export default ProfileDetail;
```

---

## 🔄 3. Alur Perubahan Data pada URL

Ketika kamu atau pengguna mengakses URL yang berbeda, komponen `ProfileDetail` akan merespons secara otomatis:

```text
/profile/1  ──> useParams() mengambil id "1"  ──> Menampilkan: Ahmad
/profile/2  ──> useParams() mengambil id "2"  ──> Menampilkan: Ali
/profile/3  ──> useParams() mengambil id "3"  ──> Menampilkan: Umar
```

---

## 💡 Kesimpulan Penting

> 🌟 **Mengapa Dynamic Route Sangat Berguna?**
> 
> Cukup dengan **Satu Komponen (`ProfileDetail`)**, kita bisa menampilkan ratusan bahkan ribuan data santri yang berbeda secara dinamis. Kita tidak perlu membuat satu per satu file komponen untuk setiap santri.
