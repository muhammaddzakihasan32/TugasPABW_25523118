import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
    kategoriAktif: "semua",
    favorit: [],
    daftarProyek: [],
};

export function simpan(state) {
    const isi = {
        versi: VERSI,
        kategoriAktif: state.kategoriAktif,
        favorit: state.favorit,
    };
    localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
    try {
        const isi = JSON.parse(localStorage.getItem(KUNCI));
        if (isi?.versi !== VERSI) {
            localStorage.removeItem(KUNCI); // bentuk lama: buang
            return null;
        }
        return isi;
    } catch {
        localStorage.removeItem(KUNCI); // isi rusak: buang
        return null;
    }
}

export function pulihkan(isi) {
    if (!isi) return; // kunjungan pertama: nilai bawaan tetap
    state.kategoriAktif = isi.kategoriAktif ?? "semua";
    state.favorit = Array.isArray(isi.favorit) ? isi.favorit : [];
}

export function isiProyek(daftar) {
    state.daftarProyek = Array.isArray(daftar) ? daftar : [];
    render(state);
}

export function pilihKategori(nilai) {
    state.kategoriAktif = nilai;
    simpan(state);
    render(state);
}

export function tambahFavorit(id) {
    if (state.favorit.includes(id)) {
        state.favorit = state.favorit.filter((favId) => favId !== id);
    } else {
        state.favorit = [...state.favorit, id];
    }
    simpan(state);
    render(state);
}

export function aturUlang() {
    localStorage.removeItem(KUNCI);
    state.kategoriAktif = "semua";
    state.favorit = [];
    render(state);
}

