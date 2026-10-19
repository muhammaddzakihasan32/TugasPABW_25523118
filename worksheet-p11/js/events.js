import { pilihKategori, tambahFavorit, aturUlang } from "./state.js";
import { perbaruiValidasi } from "./dom.js";

export function pasangPendengar() {
    const tombolFilter = document.querySelector("#filter");
    if (tombolFilter) {
        tombolFilter.addEventListener("click", (event) => {
            const tombol = event.target.closest("button[data-kategori]");
            if (!tombol) return;
            pilihKategori(tombol.dataset.kategori);
        });
    }

    const wadah = document.querySelector("#daftar");
    if (wadah) {
        wadah.addEventListener("click", (event) => {
            const tombol = event.target.closest(".favorit");
            if (!tombol) return;
            tambahFavorit(Number(tombol.dataset.id));
        });
    }

    const tombolAturUlang = document.querySelector("#atur-ulang");
    if (tombolAturUlang) {
        tombolAturUlang.addEventListener("click", () => {
            aturUlang();
        });
    }

    const form = document.querySelector("#form-buku");
    if (form) {
        form.addEventListener("input", perbaruiValidasi);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!perbaruiValidasi()) {
                const inputGalat = form.querySelector('[aria-invalid="true"]');
                if (inputGalat) inputGalat.focus();
            }
        });
    }
}

