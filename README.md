# TugasPABW_25523118
# PABW  Muhammad Dzaki Hasan  25523118
 
Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.
 
## Pertemuan 3 Halaman profil saya
 
Topik halaman saya: Daftar buku yang pernah saya baca.
 
- Judul halaman:Daftar Buku yang Pernah Saya Baca 
- Deskripsi: daftar buku yang saya miliki beserta status bacanya
- Tautan navigasi: Daftar Buku, Tambah Buku, Tentang Saya
- Dua bagian utama: Tabel Buku, Tambah Buku
- Kolom tabel: judul, penulis, tahun terbit
- Kolom form: judul, penulis, tahun terbit
- Gambar: C:\Users\LEGION\Downloads\mie ayam.jpg
 
## Catatan penggunaan AI
 
Tidak memakai AI

## Pertemuan 4  Design token halaman profil
 
- Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
- Warna utama: #1D3A8C (biru), dipilih karena ...
 
### Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1D3A8C | tombol, tautan, penanda |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |
 
Kriteria selesai saya: mengubah --color-primary di satu baris
harus mengubah warna tombol, tautan, judul, dan garis fokus

## Pertemuan 5  Layout Modern: Flexbox dan Grid

### Sketsa kerangka halaman

- Wadah `.page`: `grid-template-rows: auto 1fr auto`, tinggi minimum `100dvh`.
- Area isi: kolom `minmax(0, 16rem) minmax(0, 1fr)` dengan area bernama `sisi` dan `utama`; pada layar sempit keduanya ditumpuk.
- Navbar dan kaki kartu memakai Flexbox; galeri memakai `repeat(auto-fit, minmax(16rem, 1fr))`.
- Kartu tabel memakai `grid-column: 1 / -1` agar menonjol tanpa membuat kolom tambahan pada layar sempit.
## Pertemuan 8 JavaScript Modern

- Data profil, keahlian, dan proyek disusun sebagai variabel, objek, dan array di `worksheet-p8/js/app.js`.
- Dua fungsi murni: `buatPerkenalan` dan `formatKeahlian`.
- `map`, `filter`, dan `find` digunakan untuk mengolah daftar proyek.
- **Penggunaan AI:** AI digunakan untuk membaca instruksi worksheet dan menyusun draf JavaScript serta penghubung skrip.karena perlu meninjau dan memahami setiap baris kode sebelum penyerahan.


