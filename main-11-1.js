// TASK-1
function Car1(car) {
    this.car = car;
}
Car1.prototype.getinfo=function(){
    return "Brand: Toyota, Model: Camry, Year: 2020"
}
const car = new Car1();
// console.log(car.getinfo())
// ----------------------------------------------------------------------
// TASK-2
const Animal = {
    makeSound() {
        console.log("Some sound")
    }
};
const Dog = {
    bark() {
        console.log("Woof"); 
   }
};
Dog.__proto__ = Animal;
// Dog.makeSound()
// Dog.bark()
// ----------------------------------------------------------------------
// TASK-3
Array.prototype.sum = function () {
    return arr.reduce((acc, item) => acc += item, 0);
}
const arr = [1, 2, 3, 4, 5]
// console.log(arr.sum());
// ----------------------------------------------------------------------
// TASK-4
function Person(name) {
    this.name=name
}
Person.prototype.greet = function () {
    (console.log("Hello,my name is " + this.name));
}
function Employee(name) {
    this.name = name;
}
Employee.prototype.__proto__ = Person.prototype;
let res = new Employee("Komol");
// res.greet()
// ----------------------------------------------------------------------
// TASK-5
let Car = {
    brand:"BMW",
    speed:100,
    drive() {
        console.log(this.brand + " is driving at " + this.speed + " km / h")
    }
}
// Car.drive()
let sportCar = Object.create(Car);
sportCar.speed = 200;
// sportCar.drive()
// ----------------------------------------------------------------------
// Problem-1
class Book{
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}
const res2 = new Book("The Alchemist", "Paulo Coelho", 1988);
// res2.getSummary()
let res3 = new Book("Shum Bola", "Gafur Gulam", 1960);
// res3.getSummary();
// ----------------------------------------------------------------------
// Problem-2
class Phone{
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price=price
    }
    call() {
        console.log(`Calling from ${this.brand} ${this.model} ...`);
    }
}
const res4 = new Phone("IPhone", "13 Pro Max");
// res4.call()