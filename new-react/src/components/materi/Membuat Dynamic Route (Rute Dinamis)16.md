# Membuat Dynamic Route (Rute Dinamis)

## 📌 Tujuan Pembelajaran
Setelah mempelajari materi ini, kamu diharapkan mampu memahami konsep **Dynamic Route** pada React Router dan cara mendaftarkan sebuah parameter rute yang nilainya dapat berubah-ubah.

---

## 🛠️ Konfigurasi Route

Untuk membuat rute yang dinamis, kita menggunakan tanda titik dua (`:`) sebelum nama variabel parameter di dalam objek konfigurasi *route* kita.

Perhatikan sintaks berikut:

```javascript
{
  path: "/profile/:id",
  element: <ProfileDetail />,
}
```

---

## 🔍 Penjelasan Detail

Mari kita bedah bagian `path` dari kode di atas:

```text
/profile/:id
         ↑
     parameter
```

* **`/profile/`** adalah bagian URL yang bersifat tetap (statis).
* **`:id`** adalah bagian yang disebut **parameter**. Tanda titik dua (`:`) memberi tahu React Router bahwa bagian ini **nilainya bisa berubah-ubah (dinamis)** sesuai dengan apa yang diketik oleh pengguna di *address bar* browser.

---

## 🔄 Bagaimana Cara Kerjanya?

Dengan mendaftarkan satu rute `/profile/:id` di atas, aplikasi kita sekarang otomatis dapat menerima berbagai macam variasi URL, seperti:

* `/profile/1`
* `/profile/2`
* `/profile/3`
* `/profile/100`

✨ **Kabar baiknya:** Semua variasi URL di atas akan mengarah dan menggunakan satu komponen yang sama, yaitu: **`ProfileDetail`**. Kita tidak perlu lagi membuat puluhan rute secara manual untuk setiap pengguna.

---

## 📝 Ringkasan untuk Siswa

> 💡 **Ingat Konsep Ini:**
>
> Simbol `:id` bertindak seperti sebuah wadah atau variabel kosong. Nilainya akan diisi secara otomatis oleh angka atau teks apa pun yang dimasukkan setelah kata `/profile/`.
