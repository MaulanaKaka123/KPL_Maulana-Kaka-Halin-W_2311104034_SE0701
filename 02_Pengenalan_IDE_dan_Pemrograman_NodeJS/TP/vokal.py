# Menerima input dari pengguna
huruf = input("Masukkan satu huruf: ")
# Memastikan input hanya satu karakter dan huruf kapital
if len(huruf) == 1 and huruf.isupper():
    # Daftar huruf vokal
    vokal = "AEIOU"
    
    # Memeriksa apakah huruf tersebut vokal atau konsonan
    if huruf in vokal:
        print(f"Huruf {huruf} merupakan huruf vokal")
    else:
        print(f"Huruf {huruf} merupakan huruf konsonan")
else:
    print("Input tidak valid. Harap masukkan satu huruf kapital.")