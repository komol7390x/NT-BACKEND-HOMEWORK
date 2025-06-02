class Bank{
    users = new Map([
        [1, { name: "Batman", password: "123456", balance: 100_000 }],
        [2, { name: "Superman", password: "qwerty", balance: 200_000 }],
        [3, { name: "Supergirl", password: "super777", balance: 500_000 }],
        [4, { name: "Thanos", password: "5-stone", balance: 1_000_000 }]
      ])
    constructor(name,password,balance) {
        const user = this.users;
        user.name = name;
        user.password = password;
        user.balance = balance;
    }
    register(name,password,balance) {
        this.users.set(this.users.size + 1,{name,password,balance});
        // this.showInfo()
    }
    checkUserName(name) {
        for (let [key, val] of this.users.entries()) {
            if (val.name == name) {
                return false
            }
        }
        return true
    }
    checkUserLogin(login, password) {
        for (let [key, val] of this.users.entries()) {
            if (val.name == login && val.password == password) {
                return true
            }
        }
        return false
    }
    showInfo() {
        for (let key of this.users.entries()) {
            console.log(key);
        }
    }
    deposite() {
        
    }
    withDraw() {
        
    }
}

const bank = new Bank
let check1;
console.clear()
const prompt = require('prompt-sync')();
console.log("\tBank Account\n1. Registratsiya\n2. Tizimga kirish\n");
// const check = prompt(">>> ")
let check=2
if (check == 1) {
    console.clear()
    let login = prompt("Login kriting: ");
    let password = prompt("Parol kiriting: ");
    let balance = prompt("Balance kiriting: ")
    if (typeof balance != "number") {
        console.clear();
        console.log("Balanse faqat sonda iborat bolish kerak!");
        return 0;
    }
    let loginCheck = bank.checkUserName(login);
    // let login = "Salom";
    // let password = "123456";
    // let balance = 100_000;
    if (loginCheck) {
        console.clear();
        bank.register(login,password,balance,)
        console.log("Siz ro'yxatdan o'tdingiz\nTizimga kirasizmi?\n") 
        check1 =+prompt("YO'Q-1\nHA-2\n\n>>> ");
    } else {
        console.log("Bunday foydalanuvchi ro'yxatdan o'tgan");
    }
}
if (check == 2 || check1 == 1) {
    console.clear()
    console.log("\tBank Account");
    // let login = prompt("Login kiriting: ")
    // let pass = prompt("Parol kiriting: ")
    let login = "Batman"; //err
    let pass ="123456" //err
    let checkUser = bank.checkUserLogin(login, pass);
    if (checkUser) {
        console.clear()
        console.log(`\tBank Info\tFoydalanuvchi: ${login}\n1. Malumot\n2. Hisob to'ldirish\n3. Pul chiqarish\n4. Pul o'tqazish\n`);
        res=prompt(">>> ")
    } else {
        console.log("Login yoki Parol xato!");
        return 0    }
} else {
    console.log("Xato kiritish");
    return 0;
}
// Bank.checkUser(login,pass);
