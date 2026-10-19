export const profil = {
    nama: "Muhammad Dzaki Hasan",
    nim: "25523118",
    peran: "Mahasiswa Pengembangan Aplikasi Berbasis Web",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 1,
};

export function buatPerkenalan({ nama, peran }) {
    return `Nama saya ${nama}, ${peran}.`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
    if (!daftar) return [];
    if (!kategori || kategori === "semua") return daftar;
    return daftar.filter((item) => item.kategori === kategori);
}
