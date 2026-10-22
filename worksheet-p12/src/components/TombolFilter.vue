<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'

const daftarKategori = [
  { id: 'semua', label: 'Semua' },
  { id: 'web', label: 'Web' },
  { id: 'lainnya', label: 'Lainnya' },
]
</script>

<template>
  <div id="filter" class="filter" aria-label="Filter proyek">
    <button
      v-for="kat in daftarKategori"
      :key="kat.id"
      type="button"
      :class="{ aktif: state.kategoriAktif === kat.id }"
      @click="pilihKategori(kat.id)"
    >
      {{ kat.label }}
    </button>
    <button type="button" id="atur-ulang" @click="aturUlang">
      Atur ulang
    </button>
  </div>
</template>
