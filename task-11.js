// TASK-1
const res1 = new Date("2025-10-31");
const res2 = new Date("2024-03-03");
// console.log("Natija: "+(res1-res2)/1000/60/60/24+" kun");
// -----------------------------------------------------------
// TASK-2
const myBirthday = new Date("1997-10-14");
const day = myBirthday.getDate();
const month = myBirthday.getMonth();
const nowYear = new Date(`2025-${month+1}-${day}`);
const takeDay = nowYear.getDay();
switch (takeDay) {
    case (1):{  console.log("Dushanba"); break;}
    // case (2):{  console.log("Seshanba"); break;}
    case (3):{  console.log("Chorshanba"); break;}
    case (4):{  console.log("Payshanba"); break;}
    case (5):{  console.log("Juma"); break;}
    case (6):{  console.log("Shanba"); break;}
    case (7): { console.log("Yakshanba"); break;}
}
// -----------------------------------------------------------
// TASK-3
const user1 = {
    name: "Komol",
    age: 27,
    adress: "Toshkent",
    info: {
        isMarried: true,
        town:"Yunusobod"
    }
}
const json = JSON.stringify(user1);
// console.log(json);
let user2 = JSON.parse(json);
// console.log(user2);
// -----------------------------------------------------------
// TASK-4
const deepCopy = JSON.parse(JSON.stringify(user1))
deepCopy.info.town = "Olmazor";
// console.log(deepCopy);
// console.log(user1);
// -----------------------------------------------------------
// TASK-5
const rest1 = (...rest) => rest.reduce((acc, item) => acc += item);
// console.log(rest1(1,2,3,4,5,6,7,8,9,10,11,12));
// -----------------------------------------------------------
// TASK-6
let obj1 = {
    name: "Saloh",
    age: 25,
    adress: "Toshkent",
    readOnly:true
}
let obj2 = Object.defineProperty(obj1, "readOnly", {
    writable:false,
});
obj2.readOnly=false //O'zgartrib bolmadi faqat o'qish uchun sozlanib qoldi
// console.log(obj2);
// -----------------------------------------------------------
// TASK-7
let obj3 = Object.defineProperty(obj1, "age", { enumerable: false });
for ([key, val] of Object.entries(obj3)) {
    // console.log(key+":"+val);  //age : 25 ko'rinmaypti
}
// -----------------------------------------------------------
// TASK-8
let obj4=Object.defineProperty(obj1,"adress",{configurable:false})
delete obj4.adress
delete obj1.adress
console.log(obj4);
console.log(obj1);





