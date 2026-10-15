const wadah = document.querySelector("#daftar");
const tombolFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#pesan-muat");
const pesanGalat = document.querySelector("#pesan-galat");
const form = document.querySelector("#form-buku");
const kolomJudul = document.querySelector("#nama-kolom");
const kolomPenulis = document.querySelector("#penulis");
const kolomTahun = document.querySelector("#tahun-terbit");
const tombolKirim = form.querySelector('button[type="submit"]');

let dataProyekCache = [];

function buatKartu(proyek) {
    const kartu = document.createElement("li");
    kartu.className = "kartu proyek";

    const judul = document.createElement("h3");
    judul.textContent = proyek.judul;
    const detail = document.createElement("p");
    detail.textContent = `${proyek.tahun} | ${proyek.kategori} | ${proyek.selesai ? "Selesai" : "Berjalan"}`;

    kartu.append(judul, detail);
    return kartu;
}

export function aturMemuat(sedangMemuat) {
    if (pesanMuat) pesanMuat.hidden = !sedangMemuat;
    if (sedangMemuat) {
        if (pesanGalat) pesanGalat.hidden = true;
        pesanKosong.hidden = true;
    }
}

export function tampilkanGalat(pesan) {
    if (pesanGalat) {
        pesanGalat.textContent = pesan;
        pesanGalat.hidden = false;
    }
    wadah.textContent = '';
    pesanKosong.hidden = true;
}

export function render(daftar) {
    wadah.textContent = '';
    if (daftar && (!tombolFilter.querySelector(".aktif") || tombolFilter.querySelector(".aktif").dataset.kategori === "semua")) {
        dataProyekCache = daftar;
    }

    if (!daftar || daftar.length === 0) {
        pesanKosong.textContent = 'Belum ada data.';
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;
    daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

function tandaiTombolAktif(tombolAktif) {
    tombolFilter.querySelectorAll("button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

tombolFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (tombol === null) return;

    const kategori = tombol.dataset.kategori;
    const terpilih = dataProyekCache.filter(
        (proyek) => kategori === "semua" || proyek.kategori === kategori,
    );
    tandaiTombolAktif(tombol);
    render(terpilih);
});

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

function perbaruiValidasi() {
    let semuaSah = true;

    aturanKolom.forEach(({ input, pesan, periksa, saran }) => {
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

    tombolKirim.disabled = !semuaSah;
    return semuaSah;
}

form.addEventListener("input", perbaruiValidasi);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!perbaruiValidasi()) {
        aturanKolom.find(({ input }) => input.getAttribute("aria-invalid") === "true")?.input.focus();
    }
});

const tombolSemua = tombolFilter.querySelector('[data-kategori="semua"]');
tandaiTombolAktif(tombolSemua);

