// TASK-1
function greet() {
    console.log(`Salom, mening ismim ${this.name}`);
}
const user = { name: "Ali" };
// (greet.call(user));
// ---------------------------------------------------------
// TASK-2
function introduce(age, job) {
    console.log(`Men ${this.name}, yoshim ${age}, kasbim ${job}.`);
}
const person = { name: "Shahzod"};
introduce.call(person,24,"Developer")