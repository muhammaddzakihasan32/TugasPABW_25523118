import { saring } from "./data.js";

const wadah = document.querySelector("#daftar");
const tombolFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#pesan-muat");
const pesanGalat = document.querySelector("#pesan-galat");
const form = document.querySelector("#form-buku");
const kolomJudul = document.querySelector("#nama-kolom");
const kolomPenulis = document.querySelector("#penulis");
const kolomTahun = document.querySelector("#tahun-terbit");
const tombolKirim = form ? form.querySelector('button[type="submit"]') : null;

export function buatKartu(proyek, favorit = []) {
    const li = document.createElement("li");
    li.className = "kartu proyek";

    const judul = document.createElement("h3");
    judul.textContent = proyek.judul;

    const detail = document.createElement("p");
    detail.textContent = `${proyek.tahun} | ${proyek.kategori} | ${proyek.selesai ? "Selesai" : "Berjalan"}`;

    const pembungkusGambar = document.createElement("div");
    pembungkusGambar.className = "wadah-gambar-proyek";

    const img = document.createElement("img");
    img.src = proyek.gambar || "mie ayam.jpg";
    img.alt = proyek.judul;
    img.loading = "lazy";

    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.className = "favorit";
    tombol.dataset.id = proyek.id;
    tombol.setAttribute("aria-label", "Tandai favorit");
    tombol.textContent = favorit.includes(proyek.id) ? "★" : "☆";

    pembungkusGambar.append(img, tombol);

    li.append(judul, detail, pembungkusGambar);
    return li;
}

export function tandaiTombolAktif(kategoriAktif) {
    if (!tombolFilter) return;
    tombolFilter.querySelectorAll("button[data-kategori]").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
    });
}

export function aturMemuat(sedangMemuat) {
    if (pesanMuat) pesanMuat.hidden = !sedangMemuat;
    if (sedangMemuat) {
        if (pesanGalat) pesanGalat.hidden = true;
        if (pesanKosong) pesanKosong.hidden = true;
    }
}

export function tampilkanGalat(pesan) {
    if (pesanGalat) {
        pesanGalat.textContent = pesan;
        pesanGalat.hidden = false;
    }
    wadah.textContent = "";
    if (pesanKosong) pesanKosong.hidden = true;
}

export function render(state) {
    wadah.textContent = ""; // 1. kosongkan
    tandaiTombolAktif(state.kategoriAktif);

    const tampil = saring(state.daftarProyek, state.kategoriAktif); // dari data.js
    if (tampil.length === 0) { // 2. keadaan kosong
        pesanKosong.textContent = "Belum ada data.";
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;
    tampil.forEach((item) => // 3. isi ulang
        wadah.append(buatKartu(item, state.favorit))
    );
}

const aturanKolom = [
    {
        input: kolomJudul,
        pesan: document.querySelector("#galat-judul"),
        periksa: (nilai) => nilai.length > 0,
        saran: "Isi judul buku, lalu coba lagi.",
    },
    {
        input: kolomPenulis,
        pesan: document.querySelector("#galat-penulis"),
        periksa: (nilai) => nilai.length > 0,
        saran: "Isi nama penulis, lalu coba lagi.",
    },
    {
        input: kolomTahun,
        pesan: document.querySelector("#galat-tahun"),
        periksa: (nilai) => nilai.length > 0 && Number.isInteger(Number(nilai)) && Number(nilai) > 0,
        saran: "Masukkan tahun berupa bilangan bulat lebih dari 0.",
    },
];

export function perbaruiValidasi() {
    let semuaSah = true;

    aturanKolom.forEach(({ input, pesan, periksa, saran }) => {
        if (!input || !pesan) return;
        const sah = periksa(input.value.trim());
        semuaSah = semuaSah && sah;

        if (sah) {
            input.removeAttribute("aria-invalid");
            pesan.textContent = "";
        } else {
            input.setAttribute("aria-invalid", "true");
            pesan.textContent = saran;
        }
    });

    if (tombolKirim) tombolKirim.disabled = !semuaSah;
    return semuaSah;
}

