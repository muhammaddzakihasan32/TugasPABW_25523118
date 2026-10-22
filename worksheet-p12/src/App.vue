<script setup>
import { onMounted, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

onMounted(async () => {
  pulihkan(muat())
  try {
    isiProyek(await ambilProyek())
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <aside class="sisi" aria-label="Buku pilihan">
        <figure id="buku-pilihan">
          <img src="/mie ayam.jpg" alt="Buku Mie Ayam" loading="lazy">
          <figcaption>
            Terkadang, yang kita cari bukanlah hidup yang besar, melainkan alasan kecil untuk tetap
            bertahan, seperti seporsi mie ayam. Novel ini menemani pembaca menerima rasa sakit dan
            berdamai dengan keadaan. Kisah Ale mengingatkan bahwa kebebasan kecil di titik terendah
            bisa dimulai dari memilih makanan kesukaan sebelum menyerah.
          </figcaption>
        </figure>
      </aside>

      <div class="utama">
        <div class="galeri">
          <section id="bagian-1" class="kartu sorotan">
            <h2>Tabel Buku yang Pernah Dibaca</h2>
            <div class="kartu__isi table-wrap">
              <table>
                <caption>Daftar Buku</caption>
                <thead>
                  <tr>
                    <th scope="col">Judul Buku</th>
                    <th scope="col">Penulis</th>
                    <th scope="col">Tahun Terbit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Islam Ala Prabowo</th>
                    <td>Abdur Rahim Hasan</td>
                    <td>2025</td>
                  </tr>
                  <tr>
                    <th scope="row">Laut Bercerita</th>
                    <td>Leila S. Chudori</td>
                    <td>2017</td>
                  </tr>
                  <tr>
                    <th scope="row">Filosofi Teras</th>
                    <td>Henry Manampiring</td>
                    <td>2018</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="kartu__kaki">
              <a href="#bagian-2">Tambah entri</a>
            </div>
          </section>

          <TombolFilter />
          <DaftarProyek />
          <FormKontak />
        </div>
      </div>
    </main>

    <footer id="tentang">
      <p>MUHAMMAD DZAKI HASAN · 25523118 · 2026</p>
    </footer>
  </div>
</template>
