<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <header>
    <div class="header-baris">
      <div>
        <h1>Daftar Buku yang Pernah Saya Baca</h1>
        <p class="profil-identitas">{{ props.profil.nama }} · {{ props.profil.nim }} · {{ props.profil.peran }}</p>
      </div>
      <div class="header-kontrol">
        <input type="checkbox" id="tema" class="pengalih-tema" aria-label="Gunakan tema terang">
        <label for="tema" class="tombol-tema">Tema terang</label>
        <label for="tema" class="tombol-tema">Tema gelap</label>
        <nav aria-label="Navigasi utama">
          <ul class="navbar">
            <li><a href="#bagian-1">Daftar Buku</a></li>
            <li><a href="#bagian-2">Tambah Buku</a></li>
            <li><a href="#tentang">Tentang Saya</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.profil-identitas {
  font-size: var(--text-sm);
  color: var(--color-fg);
  opacity: 0.85;
  margin-top: var(--space-1);
}
</style>
