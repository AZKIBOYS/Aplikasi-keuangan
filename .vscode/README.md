# Aplikasi Pencatat Keuangan

Aplikasi web sederhana untuk mencatat pemasukan dan pengeluaran pribadi. Dibuat sebagai **Tugas 2 Figma & JavaScript** dengan fokus pada interaktivitas JavaScript (manipulasi DOM, event handling, dan array of objects).

- **Nama:** Muhammad Azkia
- **NIM:** 2510131310017
- **Desain Figma:** https://www.figma.com/design/nZwaCG8gXBlw82deVsI2hl/Untitled?node-id=29-489&p=f&t=lofhfNZ1spvijuYx-0


## Fungsi Web

Aplikasi membantu pengguna (terutama mahasiswa) mencatat transaksi keuangan harian, melihat riwayatnya, dan mengetahui kondisi keuangan melalui ringkasan saldo dan rasio pengeluaran yang dihitung otomatis.

## Fitur Utama

- **Tambah transaksi**: isi keterangan, nominal, dan jenis (pemasukan atau pengeluaran) melalui form.
- **Validasi input**: nominal harus lebih besar dari 0.
- **Riwayat transaksi**: daftar transaksi dibuat secara dinamis, dengan penanda warna hijau (pemasukan) dan merah (pengeluaran).
- **Hapus transaksi**: setiap item bisa dihapus dengan tombol Hapus.
- **Ringkasan otomatis**: total saldo, total pemasukan, dan total pengeluaran diperbarui setiap data berubah.
- **Statistik**: rasio pengeluaran terhadap pemasukan dalam persen.
- **Format Rupiah**: nominal ditampilkan dalam format mata uang Indonesia.
- **Navigasi 3 halaman tanpa reload**: Tambah, Riwayat, dan Statistik.
- **Responsif**: tampilan menyesuaikan layar ponsel melalui Media Query.

## Halaman

| Halaman | Isi |
|---|---|
| Tambah | Kartu ringkasan (saldo, pemasukan, pengeluaran) dan form transaksi |
| Riwayat | Daftar semua transaksi dan tombol hapus |
| Statistik | Rasio pengeluaran terhadap pemasukan |

## Teknologi

- HTML5 semantik (`header`, `nav`, `main`, `section`)
- CSS3 (Flexbox dan Media Query)
- JavaScript (vanilla): DOM dinamis, event listener, array of objects, percabangan, perulangan, dan fungsi
- [Font Awesome](https://fontawesome.com/) (ikon, dimuat lewat CDN)
- Figma (perancangan UI/UX)

## Struktur Proyek

```
.
├── index.html   # Struktur halaman
├── style.css    # Tampilan dan responsivitas
├── script.js    # Logika dan interaktivitas
└── README.md    # Dokumentasi
```

## Cara Menjalankan

1. Unduh atau clone repositori ini:
   ```bash
   git clone https://github.com/AZKIBOYS/Aplikasi-keuangan

   ```
2. Masuk ke folder proyek.
3. Buka file `index.html` di peramban (Chrome, Edge, Firefox, dan sebagainya).

Tidak perlu instalasi tambahan. Koneksi internet hanya dibutuhkan agar ikon Font Awesome tampil.

## Cara Menggunakan

1. Di halaman **Tambah**, isi keterangan dan nominal, pilih jenis transaksi, lalu klik **Simpan Transaksi**.
2. Aplikasi otomatis membuka halaman **Riwayat** yang menampilkan transaksi baru.
3. Klik **Hapus** untuk menghapus transaksi.
4. Buka halaman **Statistik** untuk melihat rasio pengeluaran.

> Catatan: data disimpan sementara di memori peramban, sehingga akan hilang saat halaman dimuat ulang.

## Konsep JavaScript yang Diterapkan

| Konsep | Contoh di kode |
|---|---|
| Array of Objects | `transactions = [{ id, description, amount, type }]` |
| Manipulasi DOM | `createElement`, `appendChild`, `innerHTML`, `classList` |
| Event handling | `submit` pada form, `click` pada tombol navigasi dan hapus |
| Percabangan | `if / else` pada validasi, jenis transaksi, dan navigasi |
| Perulangan | `forEach` untuk membuat daftar dan menjumlahkan total |
| Fungsi | `initApp()`, `switchPage()`, `deleteTransaction()`, `formatRupiah()` |
| Arrow function | `transactions.filter(transaction => transaction.id !== id)` |

## Rencana Pengembangan

- Penyimpanan permanen dengan `localStorage`
- Edit transaksi
- Filter dan pencarian
- Grafik statistik per kategori
