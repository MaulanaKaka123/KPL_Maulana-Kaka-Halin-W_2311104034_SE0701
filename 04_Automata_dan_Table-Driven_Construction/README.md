2311104034
Maulana Kaka Halin Widyadhana
S1SE-07-01

TP 
KodePos.js
Kelas KodePos{
constructor() digunakan untuk menginisialisasikan objek map yang berisi daftar kelurahan beserta kode posnya.

method getKoePos(kelurahan) digunakan menerima nama kelurahan sebagai input dan mencari kode posnya di dalam map. Jika tidak ditemukan, akan mengembalikan "Kode pos tidak ditemukan"
}
Kelas Main bertindak sebagai titik masuk utama untuk menjalankan program

DoorMachine.js
Kelas LockedState dan UnlockedState
    Pada LockedState Jika terkunci, maka akan menampilkan pesan "Pintu sudah terkunci" dan jika dibuka maka akan berubah ke UnlockedState dan menampilkan pesan "Pintu tidak terkunci"
Kelas DoorMachine digunakan untuk menyimpan state saat ini dan terdapat method lock() dan unlock() untuk mengubah state berdasarkan kondisi saat ini.

Jurnal
KodeBuah.js
Kelas KodeBuah digunakan untuk menyimpan data buah dan kodenya serta menyediakan metode untuk mengambil kode buah berdasarkan namanya
Kelas Main digunakan untuk menjalankan prgoram dengan memanggil method dari kelas KodeBuah

PosisiKarakterGame.js
Kelas State adalah interface yang akan mendefinisikan method tekanTombolW(), tekanTombolS(), dan tekanTombolX().
Kelas Berdiri, Jongkok, Tengkurap, dan Terbang masing-masing digunakan untuk implementasi dalam menangani transisi berdasarkan tombol yang ditekan.
Kelas PosisiKarakterGame digunakan untuk mengelola perubahan state dengan method setState() dan melakukan proses input dari pemain dengan method tekanTombolW(), tekanTombolS(), dan tekanTombolX().