<script setup>
import { ref } from 'vue'

const judul = ref('')
const penulis = ref('')
const tahun = ref('')

const galatJudul = ref('')
const galatPenulis = ref('')
const galatTahun = ref('')

function validasi() {
  galatJudul.value = judul.value.trim() ? '' : 'Isi judul buku, lalu coba lagi.'
  galatPenulis.value = penulis.value.trim() ? '' : 'Isi nama penulis, lalu coba lagi.'
  galatTahun.value = tahun.value && Number(tahun.value) > 0 ? '' : 'Masukkan tahun berupa bilangan bulat lebih dari 0.'
  return !galatJudul.value && !galatPenulis.value && !galatTahun.value
}

function kirim() {
  if (!validasi()) return
  alert(`Buku "${judul.value}" berhasil disimpan!`)
  judul.value = ''
  penulis.value = ''
  tahun.value = ''
}
</script>

<template>
  <section id="bagian-2" class="kartu">
    <h2>Tambahkan Buku Baru</h2>
    <form id="form-buku" novalidate @submit.prevent="kirim">
      <p class="form-kolom">
        <label for="nama-kolom">Judul Buku</label>
        <input
          id="nama-kolom"
          v-model="judul"
          type="text"
          required
          :aria-invalid="!!galatJudul"
          @input="galatJudul = ''"
        >
        <small class="pesan-galat" aria-live="polite">{{ galatJudul }}</small>
      </p>
      <p class="form-kolom">
        <label for="penulis">Penulis</label>
        <input
          id="penulis"
          v-model="penulis"
          type="text"
          required
          :aria-invalid="!!galatPenulis"
          @input="galatPenulis = ''"
        >
        <small class="pesan-galat" aria-live="polite">{{ galatPenulis }}</small>
      </p>
      <p class="form-kolom">
        <label for="tahun-terbit">Tahun Terbit</label>
        <input
          id="tahun-terbit"
          v-model="tahun"
          type="number"
          min="1"
          required
          :aria-invalid="!!galatTahun"
          @input="galatTahun = ''"
        >
        <small class="pesan-galat" aria-live="polite">{{ galatTahun }}</small>
      </p>
      <button type="submit">Simpan</button>
    </form>
  </section>
</template>
