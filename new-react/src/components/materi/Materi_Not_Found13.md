# Not Found (Halaman 404)

## 📌 Pengantar
Bayangkan kamu sedang membuka halaman web, lalu mencoba mengakses alamat yang tidak terdaftar, misalnya:
`👉 /abc`

Padahal, aplikasi web kita sejauh ini hanya memiliki rute (*route*) resmi berikut:
* `/` (Home)
* `/about` (About)

Ketika kamu atau pengguna membuka `/abc`, maka rute tersebut **tidak ditemukan**. 

---

## 🛑 Mengetahui Masalah: Apa itu Not Found / 404?

Daripada pengguna melihat halaman error bawaan browser yang membingungkan dan tidak estetik, kita harus membuat halaman khusus. Hal ini biasa disebut dengan halaman **Not Found** atau **Error 404**.

> 💡 **Prinsip Utama:** Memberikan pengalaman pengguna (UX) yang baik dengan memberi tahu secara ramah bahwa halaman yang mereka cari tidak ada, lalu mengarahkan mereka kembali ke halaman utama.

---

## 🎯 Konsep Dasar yang Harus Dipahami

Untuk tahap awal, kamu cukup memahami alur logis berikut:

```text
Rute Tidak Terdaftar (/abc)
           ↓
    Halaman Not Found
           ↓
Tampilkan Pesan Ramah / 404
```

---

## 🧠 Ringkasan Materi

Kamu tidak perlu menghafal konfigurasi rute yang rumit terlebih dahulu. Cukup tanamkan pemahaman dasar ini:

* **Error 404** = Halaman tidak ditemukan.
* **Solusi** = Buat halaman khusus (Not Found) agar pengguna tidak bingung dan bisa kembali ke navigasi yang benar.