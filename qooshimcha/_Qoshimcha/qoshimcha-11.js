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
    checkRegisterName(name) {
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
    showInfoUser(name) {
        for (let [key,item] of this.users.entries()) {
            if (item.name == name) {
                console.log(`Login: ${item.name}\nParol: ${item.password}\nBalance ${item.balance}`);
            }
        }
    }
    deposite(login, balance) {
        let sum;
        let new1;
        for (let [key, val] of this.users.entries()) {
            if (val.name == login) {
                sum=val.balance
                val.balance += balance
                new1=val.balance
            }
        }
        console.log(`User: ${login}\n\nAvvalgi balance: ${sum}\nQo'shilgan balance: ${balance}\n--------------------\nHozir: ${new1}`);
    }
    withDraw(login, money) {
        console.clear();
        let sum;
        let new1;
        for (let [key, val] of this.users.entries()) {
            if (val.name == login) {
                if (val.balance < money) {
                    console.log(`Kechirasiz sizda mablag' yetarli emas`);
                    return 0
                } else {
                    sum=val.balance
                    val.balance -= money;
                    new1=val.balance;
                    console.log(`User: ${login}\n\nAvvalgi balance: ${sum}\nChiqarilgan balance: ${money}\n--------------------\nHozirgi balance: ${new1}`);
                    return 0
                }
            }
        }
        
    }
    sendUsers(login, otherClient, money) {
        console.clear()
        let sum;
        let new1;
        let othersum;
        let othernew
        for (let [key, val] of this.users.entries()) {
            if (val.name == login) {
                if (val.balance < money) {
                    console.log(`Kechirasiz sizda mablag' yetarli emas`);
                    return 0
                } else {
                    sum = val.balance
                    val.balance -= money;
                    new1 = val.balance;
                }
            }
        }
        for (let [key, val] of this.users.entries()) {
            if (val.name == otherClient) {
                othersum = val.balance;
                val.balance += money;
                othernew = val.balance;
            }
        }
        console.log(`User: ${login}\n\nAvvalgi balance: ${sum}\nChiqarilgan balance: ${money}\n----------------------------\nHozirgi balance: ${new1}\n==================`);
        console.log(`\nUser: ${otherClient}\n\nAvvalgi balance: ${othersum}\nQo'shilgan balance: ${money}\n----------------------------\nHozirgi balance: ${othernew}\n`);
    }
}

const bank = new Bank
let check1;
console.clear()
const prompt = require('prompt-sync')();
console.log("\tBank Account\n1. Registratsiya\n2. Tizimga kirish\n");
const check = prompt(">>> ")
if (check == 1) {
    console.clear()
    let login = prompt("Login kriting: ");
    let password = prompt("Parol kiriting: ");
    let balance1 = +prompt("Balance kiriting: ")
    if (typeof balance1 != "number") {
        console.clear();
        console.log("Balanse faqat sondan iborat bolish kerak!");
        return 0;
    }
    let loginCheck = bank.checkRegisterName(login);
    if (loginCheck) {
        console.clear();
        bank.register(login,password,balance1,)
        console.log("Siz ro'yxatdan o'tdingiz\nTizimga kirasizmi?\n") 
        check1 =+prompt("YO'Q-1\nHA-2\n\n>>> ");
    } else {
        console.log("Bunday foydalanuvchi ro'yxatdan o'tgan");
    }
}
if (check == 2 || check1 == 2) {
    console.clear()
    console.log("\tBank Account");
    let login = prompt("Login kiriting: ");
    let pass = prompt("Parol kiriting: ")
    let checkUser = bank.checkUserLogin(login, pass);
    if (checkUser) {
        console.clear()
        console.log(`\tBank Info\tFoydalanuvchi: ${login}\n1. Malumot\n2. Hisob to'ldirish\n3. Pul chiqarish\n4. Pul o'tqazish\n`);
        let res = prompt(">>> ")
        if (res == 1) {
            console.clear()
            bank.showInfoUser(login);
        } else if (res == 2) {
            console.clear()
            let money = +prompt("Qancha pul to'ldirasiz: ")
            bank.deposite(login,money);
        } else if (res == 3) {
            console.clear()
            let money = +prompt("Qancha pul chiqarasiz: ");
            bank.withDraw(login,money);
        } else if (res == 4) {
            let user = prompt("Kimga o'tkazasiz? ");
            let money = +prompt("Qancha o'tkazasiz? ");
            bank.sendUsers(login,user,money)
        }
    } else {
        console.log("Login yoki Parol xato!");
        return 0    }
} else {
    console.log("Xato kiritish1");
    return 0;
}
