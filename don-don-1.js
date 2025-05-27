let check = true;
let obj = {
    user: 0,
    comp: 0
}
const prompt = require('prompt-sync')();

const name = prompt("Ismingiz nima? ");
console.log(`Salom, ${name}!`);

let game = ["", "Tosh", "Qaychi", "Qog'oz"]
while (check) {
    console.log("1.Tosh\n2.Qaychi\n3.Qog'oz\n");
    console.log(`User ${obj.user}:${obj.comp} Komputer`);
    let comp1 = (Math.random() * 3 + 1).toFixed();
    let user1 = +prompt("Son kiriting? \n>>> ")
    if (user1 == comp1) {
        console.clear()
        console.log(obj.user, ":", obj.comp);
        console.log("Durang");
    } else if (user1 > comp1) {
        console.clear()
        obj.user += 1
        console.log(obj.user, ":", obj.comp);
        console.log("User +1");
    } else if (user1 < comp1) {
        console.clear()
        obj.comp += 1
        console.log(obj.user, ":", obj.comp);
        console.log("Kompyuter +1");
    }
    if (obj.user == 3) {
        console.log("User yutdi");
        break
    } else if (obj.comp == 3) {
        console.log("Kompyuter yutdi");
        break
    }

}