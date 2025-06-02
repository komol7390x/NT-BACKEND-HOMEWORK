function Car1(car) {
    this.car = car;
}
Car1.prototype.getinfo=function(){
    return "Brand: Toyota, Model: Camry, Year: 2020"
}
const car = new Car1();
// console.log(car.getinfo())
// ----------------------------------------------------------------------
Animal = {
    makeSound() {
        console.log("Some sound")
    }
}
