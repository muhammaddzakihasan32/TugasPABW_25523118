import { ambilProyek } from "./api.js";
import { render, tampilkanGalat, aturMemuat } from "./dom.js";

const profil = {
    nama: "Muhammad Dzaki Hasan",
    nim: "25523118",
    peran: "Mahasiswa Pengembangan Aplikasi Berbasis Web",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 1,
};

function buatPerkenalan({ nama, peran }) {
    return `Nama saya ${nama}, ${peran}.`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

const kalimatPerkenalan = buatPerkenalan(profil);
const teksKeahlian = formatKeahlian(profil.keahlian);
const namaCadangan = profil.nama ?? "Nama belum diisi";
const kelasProfil = profil.kelas?.nama ?? "Kelas belum diisi";

console.log(kalimatPerkenalan);
console.log(teksKeahlian);
console.log(`Jumlah proyek: ${profil.jumlahProyek}`);
console.log(`Nama profil: ${namaCadangan}`);
console.log(`Kelas: ${kelasProfil}`);
console.table(profil.keahlian);

async function muat() {
    aturMemuat(true);
    try {
        const data = await ambilProyek();
        console.table(data);
        render(data);
    } catch (galat) {
        tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
        console.error(galat.message);
    } finally {
        aturMemuat(false);
    }
}

muat();

