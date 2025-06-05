import json
# Definisikan kelas untuk representasi data
class Student:
    def __init__(self, first_name, last_name, gender, age, address, courses):
        self.first_name = first_name
        self.last_name = last_name
        self.gender = gender
        self.age = age
        self.address = address
        self.courses = courses
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
# Method untuk membaca dan mem-parsing file JSON
def ReadJSON(filename):
    try:
        with open(filename, 'r') as file:
            data = json.load(file)
            
            # Ekstrak informasi dari JSON
            first_name = data['firstName']
            last_name = data['lastName']
            gender = data['gender']
            age = data['age']
            address = data['address']
            courses = data['courses']
            # Buat objek Student
            student = Student(first_name, last_name, gender, age, address, courses)
            # Print hasil dengan format yang diinginkan
            print(f"Nama: {student.get_full_name()} dari fakultas dengan nim: {student.courses[0]['code']}")
    
    except Exception as e:
        print(f"Error: {e}")
# Contoh penggunaan method
# Gantilah 'data.json' dengan nama file yang sesuai
ReadJSON('data.json')