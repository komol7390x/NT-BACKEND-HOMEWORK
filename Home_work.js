// CALL
// TASK-1
function greet() {
    console.log(`Salom, mening ismim ${this.name}`);
}
const user = { name: "Ali" };
(greet.call(user));
// ---------------------------------------------------------
// TASK-2
function introduce(age, job) {
    console.log(`Men ${this.name}, yoshim ${age}, kasbim ${job}.`);
}
const person = { name: "Shahzod"};
introduce.call(person, 24, "Developer")
// ---------------------------------------------------------
// TASK-3
const teacher = {
    name: "Asad",
    subject: "Matematika",
    introduce() {
        console.log(`Men ${this.name}, ${this.subject} o'qituvchisiman.`);
    }
};
const anotherTeacher = { name: "Karim", subject: "Fizika" };
teacher.introduce(); //o'zini chaqirish;
teacher.introduce.call(anotherTeacher);  //anotherTeacher orqali chaqirish;
// ---------------------------------------------------------


// APPLY
// TASK-1
function calculate(a, b) {
    console.log(`${this.operation} natijasi: ${a + b}`);
}
const math = { operation: "Qo'shish" };
calculate.apply(math, [3, 4])
// ---------------------------------------------------------
// TASK-2
function displayInfo(age, city) {
    console.log(`Ism: ${this.name}, Yosh: ${age}, Shahar: ${city}`);
}
const user1 = { name: "Dilshod" };
displayInfo.apply(user1, [24, "Toshkent"])
// ---------------------------------------------------------
// TASK-3
const teacher1 = {
    name: "Asad",
    subject: "Matematika",
    introduce() {
        console.log(`Men ${this.name}, ${this.subject}
   o'qituvchisiman.`);
    }
};
const anotherTeacher1 = { name: "Karim", subject: "Fizika" };
teacher.introduce()  //o'zini chaqirish;
teacher.introduce.apply(anotherTeacher1) //anotherTeacher1 orqali chaqirish;
// ---------------------------------------------------------
// BIND
// TASK-1
function sayHello() {
    console.log(`Salom, men ${this.name}!`);
}
const user2 = { name: "Bekzod" };
let res = sayHello.bind(user2);
res();
// ---------------------------------------------------------
// TASK-2
function introduce(age, job) {
    console.log(`Men ${this.name}, yoshim ${age}, kasbim ${job}.`);
}
const person1 = { name: "Shahzod" };
let res2 = introduce.bind(person1,34,"Bog'bon")
res2()
// ---------------------------------------------------------
// TASK-3
const mathOperations = {
    add(a, b) {
        console.log(`${this.operation} natijasi: ${a + b}`);
    }
};
const calculator = { operation: "Qo'shish" };
let res3 =mathOperations.add.bind(calculator,3,4)
res3()