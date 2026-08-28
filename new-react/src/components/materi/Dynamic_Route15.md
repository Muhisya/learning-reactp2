# Dynamic Route

Bagian ini adalah salah satu fitur yang sangat menarik dan penting dalam pembuatan aplikasi web modern menggunakan React Router.

---

## 📌 Masalah yang Sering Dihadapi

Bayangkan kita sedang membuat aplikasi media sosial atau e-commerce, lalu kita memiliki beberapa halaman profil pengguna seperti ini:
* `/profile/1`
* `/profile/2`
* `/profile/3`

Apakah kita harus mendaftarkan rutenya satu per satu di dalam kode kita?
* `/profile/1` ❌
* `/profile/2` ❌
* `/profile/3` ❌
* `/profile/4` ❌
* `/profile/5` ❌
* ... dan seterusnya sampai ribuan pengguna?

**Tentu tidak!** Cara tersebut sangat tidak efisien dan mustahil dilakukan jika data pengguna terus bertambah.

---

## 💡 Solusi: Dynamic Route

Untuk mengatasi masalah di atas, kita bisa menggunakan fitur bernama **Dynamic Route** (Rute Dinamis). 

> **Definisi Sederhana:** 
> Dynamic Route adalah sebuah rute yang polanya tetap, tetapi nilai di dalam URL-nya bisa berubah-ubah sesuai dengan data yang diakses.

Dengan Dynamic Route, kita cukup membuat **satu rute tunggal** yang mampu menangani semua pola URL di atas secara otomatis.

---

## 🧠 Alur Pemahaman

Untuk tahap awal, mari pahami konsepnya melalui bagan sederhana berikut:

```text
Tanpa Dynamic Route (Salah):
/profile/1 ──> Komponen Profile1
/profile/2 ──> Komponen Profile2

Dengan Dynamic Route (Benar):
/profile/:id ──> Cukup 1 Komponen Profile (Data berubah otomatis mengikuti ID)
```

Di materi selanjutnya, kita akan belajar bagaimana cara menuliskan tanda titik dua (`:`) pada komponen *router* untuk membaca ID yang dinamis ini.

---

### 📝 Ringkasan Singkat
* **Dynamic Route** digunakan agar kita tidak perlu membuat rute satu per satu untuk data yang polanya sama.
* Berguna untuk halaman yang isinya berubah-ubah berdasarkan parameter tertentu, seperti halaman detail produk, artikel berita, atau profil pengguna.