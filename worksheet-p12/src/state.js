import { reactive } from 'vue'

const KUNCI = 'pabw-p11'
const VERSI = 2

export const state = reactive({
  kategoriAktif: 'semua',
  daftarProyek: [],
  favorit: [],
  memuat: true,
  galat: '',
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((favId) => favId !== id)
  } else {
    state.favorit = [...state.favorit, id]
  }
}

export function isiProyek(daftar) {
  state.daftarProyek = Array.isArray(daftar) ? daftar : []
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
  state.kategoriAktif = 'semua'
  state.favorit = []
}

export function simpan(nilai) {
  const isi = {
    versi: VERSI,
    kategoriAktif: nilai.kategoriAktif,
    favorit: nilai.favorit,
  }
  localStorage.setItem(KUNCI, JSON.stringify(isi))
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI))
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI)
      return null
    }
    return isi
  } catch {
    localStorage.removeItem(KUNCI)
    return null
  }
}

export function pulihkan(isi) {
  if (!isi) return
  state.kategoriAktif = isi.kategoriAktif ?? 'semua'
  state.favorit = Array.isArray(isi.favorit) ? isi.favorit : []
}
