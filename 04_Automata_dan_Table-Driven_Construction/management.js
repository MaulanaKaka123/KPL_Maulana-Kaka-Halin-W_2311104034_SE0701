// Encapsulatiomn
class Person {
    #name;
    age
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}


class Employee extends Person{
    constructor(name, age, jobTitle, salary, role){
        super(name, age);
        this.role = role;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }

    introduce(){
        return `${super.intorduce()}`
    }
}

class Manager extends Employee {
    #bonus
    constructor(name, age, jobTitle, salary, bonus){
        super(name, age, jobTitle, salary);
        this.#bonus = bonus;
    }

    getTotalSalary(){
        return this.salary + this.#bonus;
    }

    introduce(){
        return `${super.introduce()} I am`
    }
}

class Departement{
    constructor(name){
        if(this.constructor == )
        this.name = name;
    }

    getDepartementInfo(){
        
    }
}
