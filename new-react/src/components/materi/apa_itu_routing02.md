# Apa Itu Routing?

**Routing adalah proses menentukan halaman atau komponen apa yang harus ditampilkan berdasarkan URL** yang sedang diakses oleh pengguna. Melalui *routing*, aplikasi kita dapat merespons perubahan alamat URL di browser secara dinamis.

---

## Analogi Sederhana

Untuk memudahkan pemahaman, mari kita lihat pemetaan antara URL dan komponen yang ditampilkan pada aplikasi berikut:

| URL | Komponen yang Ditampilkan |
| :--- | :--- |
| `/` | `Home` |
| `/about` | `About` |
| `/profile` | `Profile` |
| `/contact` | `Contact` |

Secara visual, alur kerja *routing* dapat digambarkan seperti ini:

```text
URL
 ↓
Router (Pemberi Arah)
 ↓
Component (Halaman yang Tampil)
```

---

## Contoh Kasus

Misalnya, pengguna membuka alamat atau menu berikut di browser:

```text
/profile
```

Ketika hal itu terjadi, **Router** akan bekerja di latar belakang dan mendeteksi perubahan tersebut:

> *"Oh, pengguna sedang membuka `/profile`. Berarti tugas saya adalah memanggil dan menampilkan komponen **Profile** ke layar!"*

Dengan adanya *routing*, aplikasi *Single Page Application* (SPA) seperti React dapat memiliki banyak halaman yang rapi dan fungsional layaknya website multi-halaman konvensional.
