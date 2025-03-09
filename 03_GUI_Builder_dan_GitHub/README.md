2311104034
Maulana Kaka Halin Widyadhana
S1SE-07-01

Jurnal
Pertama pada struktur HTML terdapat <head> untuk mengatur viewport agar tampilan responsif kemudian <body> yang berisikan elemen utama untuk kalkulator seperti <div class="calculator">, lalu tampilan untuk input serta tampilan untuk tombol angka dan operator.

Kemudian terdapat CSS untuk desain tampilan. Untuk kode ini terdapat body yang menggunakan 'display: flex;' untuk menempatkan kalkulator di tengah halaman, lalu ada .calculator untuk latar belakang yang berwarna putih, kemudian .screen yang merupakan area tampilan angka dengan ukuran dan gaya tertentu, kemudian .buttons untuk tombol dengan grid 5 kolom, lalu .operator, .clear, dan .equal untuk memberikan warna khusu pada masing-masing tombol operator, clear dan equal.

Terakhir JavaScript supaya dapat di interaksi. Variabel screen digunakan untuk menunjuk elemen input yang berfungsi untuk menampilkan angka atau hasil dari perhitungan dan currentInput digunakan untuk menyimpan input dari pengguna. Terdapat 4 fungsi utama pada kode ini yaitu, appendNumber(number) untuk menambahkan angka, appendOperator(operator) untuk menambahkan operator, clearScreen() untuk menghapus semua input, dan yang terakhir adalah calculateResult() yang digunakan untuk menghitung ekspresi matematika dan menampilkan hasilnya. Jika terdapat kesalahan, maka akan menampilkan error

Tugas Pendahuluan
Pertama pada kode ini terdapat <head> yang berisi metadata dan viewport agar tampilan responsif.

Kemudian pada CSS terdapat body yang mengatur font ke Times New Roman dengan ukuran font 20px dan teks sejajar di tengan dengan margin atas 50px. Lalu .container berfungsi untuk wadah dengan ukuran 300x130px. Kemudian input, button diberikan padding agar lebih mudah diklik dan diberi margin agar tidak terlalu berdekatan.

Terakhir supaya programnya berfungsi, digunakan JavaScript untuk membuat programnya bekerja. Terdapat fungsi munculkanNama() untuk mengambil nilai dari input teks. Jika pengguna mengisi nama maka pesan "Selamat datang tuan [nama]" akan muncul, tetapi jika input kosong pengguna akan diminta memasukkan nama terlebih dahulu