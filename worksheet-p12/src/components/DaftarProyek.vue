<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <section id="proyek" class="kartu sorotan">
    <h2>Proyek Saya</h2>

    <p v-if="state.memuat" id="pesan-muat">Memuat data...</p>
    <p v-else-if="state.galat" id="pesan-galat" class="pesan-galat" aria-live="assertive">{{ state.galat }}</p>
    <p v-else-if="tampil.length === 0" id="pesan-kosong">Belum ada data.</p>

    <ul v-else id="daftar" class="daftar-proyek" aria-live="polite">
      <li v-for="proyek in tampil" :key="proyek.id" class="kartu proyek">
        <h3>{{ proyek.judul }}</h3>
        <p>{{ proyek.tahun }} | {{ proyek.kategori }} | {{ proyek.selesai ? 'Selesai' : 'Berjalan' }}</p>

        <div class="wadah-gambar-proyek">
          <img :src="proyek.gambar || '/mie ayam.jpg'" :alt="proyek.judul" loading="lazy">
          <button
            type="button"
            class="favorit"
            :data-id="proyek.id"
            aria-label="Tandai favorit"
            @click="tambahFavorit(proyek.id)"
          >
            {{ state.favorit.includes(proyek.id) ? '★' : '☆' }}
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>
