const profil = {
    nama: "Muhammad Dzaki Hasan",
    nim: "25523118",
    peran: "Mahasiswa Pengembangan Aplikasi Berbasis Web",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 1,
};
const daftarProyek = [
    {
        judul: "Halaman Profil Daftar Buku",
        tahun: 2026,
        selesai: true,
    },
];

function buatPerkenalan({ nama, peran }) {
    return `Nama saya ${nama}, ${peran}.`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

const kalimatPerkenalan = buatPerkenalan(profil);
const teksKeahlian = formatKeahlian(profil.keahlian);
const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
const proyekProfil = daftarProyek.find(
    (proyek) => proyek.judul === "Halaman Profil Daftar Buku",
);
const jumlahProyekSelesai = proyekSelesai.length;
const namaCadangan = profil.nama ?? "Nama belum diisi";
const kelasProfil = profil.kelas?.nama ?? "Kelas belum diisi";

console.log(kalimatPerkenalan);
 console.log(teksKeahlian);
 console.log(`Jumlah proyek: ${profil.jumlahProyek}`);
console.log(`Nama profil: ${namaCadangan}`);
console.log(`Kelas: ${kelasProfil}`);
console.table(profil.keahlian);
console.table(daftarProyek);
console.table(proyekSelesai);
console.table(judulProyek);
 console.log(proyekProfil);
console.log(`Jumlah proyek selesai: ${jumlahProyekSelesai}`);
