class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
        let hasil = a + b + c;
        return hasil;
    }
}

const penjumlahan = new Penjumlahan();

let hasil = penjumlahan.JumlahTigaAngka(23.0, 11.0, 34.0);

console.log("Hasil Penjumlahan: ", hasil);
