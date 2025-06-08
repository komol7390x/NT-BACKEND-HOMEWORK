// TASK-1
class Student{
    constructor(name, age, grade) {
        this.name = name;
        this.grade = grade;
        this.age=age
    }
    getInfo() {
        return `Ismi: ${this.name}\nYoshi: ${this.age}\nBahosi: ${this.grade}`
    }
}
const res1 = new Student("Alisher", 27, 5);
// console.log((res1.getInfo()));
// -------------------------------------------------------------------
// TASK-2
class BankAccount{
    #balance
    owner
    constructor(balance, owner) {
        this.#balance = balance,
            this.owner = owner
    }
    withdraw(money) {
        if (money > this.#balance) {
            console.log("Yetarli mablag' yo'q");
        } else {
            this.#balance -= money
        }
    }
    get getBalance() {
        return this.#balance
    }
    set deposit(money) {
        if (typeof money == "number" && money > 0) {
            this.#balance += money
            console.log(`Hozir balance: ${this.#balance}`);
        } else {
            console.log("Kiritilgan suma raqamda bo'lish kerak!");
        }
    }
}
const res2 = new BankAccount(200_000, "Bahrom");
// res2.deposit = 100_000;
// res2.deposit = -100_000;
// console.log(`Hozir da mablag' ${res2.getBalance}`);
// res2.withdraw(50_000);
// console.log(`Hozir da mablag' ${res2.getBalance}`);
// -----------------------------------------------------------------
// TASK-3
class Animal{
    constructor(name, sound) {
        this.name = name,
        this.sound=sound
    }
    makeSound() {
        console.log(this.name+" hayvon "+this.sound+" tovush chiqaradi");
    }
}
class Dog extends Animal { };
class Cat extends Animal { };
const cat = new Cat("Mushuk", "Meow");       
const dog = new Cat("Kuchuk", "Woof!");
// cat.makeSound()
// dog.makeSound()
// -----------------------------------------------------------------
// TASK-4
class Technology{
    constructor(brand, price) {
        this.brand = brand,
        this.price=price
    }
    getInfo() {
        console.log( `Brend: ${this.brand}\tNarxi: ${this.price} $`)
    }
}
class Computer extends Technology{
    constructor(brand,price,processor) {
        super(brand, price);
        this.processor=processor
    }
    getInfo() {
        console.log(`Brend: ${this.brand}\tNarxi: ${this.price} $\tProssesori: ${this.processor}`)
    }
}
class Laptop extends Computer{
    constructor(brand, price,processor,batteryLife) {
        super(brand, price, processor);
        this.batteryLife = batteryLife;
    }
    getInfo() {
        console.log(`Brend: ${this.brand}\tNarxi: ${this.price} $\tProssesori: ${this.processor}\tBattere: ${this.batteryLife}`)
    }
}

const tex = new Technology("Iphone 13 Pro max", 500)
const comp = new Computer("Apple", 1000, "core i7")
const lap=new Laptop("Surface",500,"core i5","20000 mha")
// tex.getInfo()
// comp.getInfo()
// lap.getInfo()
// -----------------------------------------------------------------
// TASK-5
class Vehicle {
    constructor(name, space) {
        this.name = name,
        this.space=space
    }
    move() {
        console.log(`${this.name}${this.space} harakatlanmoqda!`);
    }
}
class Car extends Vehicle { };
class Boat extends Vehicle { };
class Airplane extends Vehicle { };
const trans=new Vehicle("Transport","")
const car = new Car("Mashina", " yo'lda")
const boat = new Airplane("Samalyot", " havoda")
const air = new Boat("Mashina", " suvda")
// trans.move()
// car.move()
// boat.move();
// air.move()
// --------------------------------------------------------------------
// Bonus
function divide(first,second) {
    try {
        if (second != 0 && typeof first == "number" && typeof second == "number") {
            return first/second
        } else {
            throw new Error("Qiymatlar son emas yoki 2-qiymati 0 ga teng!")
        }
    } catch (error) {
        return error.message
    }
}
// console.log(divide(15,5));
// console.log(divide(15,0));
// console.log(divide("str", "str2"));

// -------------------------------------------
function sqrt(first) {
    try {
        if (first > 0 && typeof first == "number") {
            return Math.sqrt(first)
        } else {
            throw new Error("Musbat son emas yoki Bu son emas")
        }
    } catch (error) {
        return error.message
    }
}
console.log(sqrt(81));
console.log(sqrt(-81));

