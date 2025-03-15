class KodeBuah {
    constructor() {
        this.dataBuah = {
            "Apel": "A00",
            "Aprikot": "B00",
            "Alpukat": "C00",
            "Pisang": "D00",
            "Paprika": "E00",
            "Blackberry": "F00",
            "Ceri": "H00",
            "Kelapa": "I00",
            "Jagung": "J00",
            "Kurma": "K00",
            "Durian": "L00",
            "Anggur": "M00",
            "Melon": "N00",
            "Semangka": "O00"
        };
    }

    getKodeBuah(namaBuah) {
        return this.dataBuah[namaBuah] || "Kode tidak ditemukan";
    }
}

class Main {
    static main() {
        const kodeBuah = new KodeBuah();
        console.log("Kode untuk Apel:", kodeBuah.getKodeBuah("Melon"));
        console.log("Kode untuk Durian:", kodeBuah.getKodeBuah("Durian"));
        console.log("Kode untuk Manggis:", kodeBuah.getKodeBuah("Semangka"));
        console.log("Kode untuk Manggis:", kodeBuah.getKodeBuah("Buah Naga"));
    }
}

// Menjalankan main class
Main.main();