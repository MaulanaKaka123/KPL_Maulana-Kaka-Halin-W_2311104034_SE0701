class SayaTubeVideo {
    // Atribut kelas
    constructor(title) {
        this.id = this.generateRandomId();
        this.title = title;
        this.playCount = 0;
    }
    // Method untuk menghasilkan ID random 5 digit
    generateRandomId() {
        return Math.floor(10000 + Math.random() * 90000);
    }
    // Method untuk menambah playCount
    IncreasePlayCount(count) {
        this.playCount += count;
    }
    // Method untuk mencetak detail video
    PrintVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}
// Membuat objek video dengan judul yang sesuai
const video = new SayaTubeVideo("Tutorial Design By Contract - Maulana Kaka Halin Widyadhana");
// Memanggil method untuk mencetak detail video
video.PrintVideoDetails();
// Menambah play count sebagai contoh penggunaan
video.IncreasePlayCount(5);
video.PrintVideoDetails(); // Memanggil lagi untuk melihat perubahan