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
        console.log(`Men ${this.name}, ${this.subject} o‘qituvchisiman.`);
    }
};
const anotherTeacher = { name: "Karim", subject: "Fizika" };
teacher.introduce(); //o'zini chaqirish;
teacher.introduce.call(anotherTeacher);  //anotherTeacher orqali chaqirish;
// ---------------------------------------------------------
// TASK-4