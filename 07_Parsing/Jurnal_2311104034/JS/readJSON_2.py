import json

def ReadJSON(file_path):
    # Membaca dan melakukan parsing dari file JSON
    with open(file_path, 'r') as file:
        data = json.load(file)
    # Mengambil data dari member dan mencetak dalam format yang diminta
    for member in data['members']:
        first_name = member['firstName']
        nim = member['nim']
        faculty = member['gender']  #anggap gender sebagai fakultas dalam konteks ini
        print(f"{first_name} dengan nim {nim} dari {faculty}")
# Contoh pemanggilan fungsi
# Anda harus mengganti 'path_to_your_file.json' dengan path yang sesuai
ReadJSON('path_to_your_file.json')