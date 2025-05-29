// TASK - 1
let user1 = {
    name: "Alisher",
    age: 27,
}
let user2 = {
    name: "Bahodir",
    age: 20,
}
let map = new WeakMap();
map.set(user1, 20);
map.set(user2, 30);

function getSubscriptionDays(user){
    if (map.has(user)) {
        return map.get(user)
    } else {
        return "User not found" 
    }
}
// console.log(getSubscriptionDays(user1));
user2 = null;
// console.log(getSubscriptionDays(user2));
// ----------------------------------------------
// TASK-2
let user3 = {
    name: "Alisher",
    age: 27,
}
let user4 = {
    name: "Bahodir",
    age: 20,
}
let map2 = new WeakMap();
function getPassword(user) {
    if (map2.has(user)) {
        return map2.get(user)
    } else {
        return "Access denied" 
    }
} 
map2.set(user4, "1235");
map2.set(user3, "qwerty123");
// console.log(getPassword(user3));
// console.log(getPassword(user4));
// ----------------------------------------------
// TASK-3
let user5 = {
    name: "Sardor",
    age: 22
};
let set2 = new WeakSet();
set2.add(user5);
set2.add(user4)
function isLoggedIn(user) {
    return set2.has(user)
}
// console.log(isLoggedIn(user4));
user4 = null;
// console.log(isLoggedIn(user4));
// ----------------------------------------------
// TASK-4
let user11={
    name: "Abdurashid",
    masseage:"Salom Dunyo"
}
let user12 = {
    name: "Saloh",
    masseage:""
}
let user13 = {
    name: "Abdurashid",
    masseage: "Hello"
}
let set3 = new WeakSet();
set3.add(user11).add(user12).add(user13)
function hasSentMessage(user) {
    if (set3.has(user)) {
        if (user.masseage.length > 0) {
            return true
        } else {
            return false
        }
    }
    return false
}
// console.log(hasSentMessage(user11));
// console.log(hasSentMessage(user12));
// console.log(hasSentMessage(user13));
// ----------------------------------------------
// TASK-5
const user6 = {
    name1: "Ali",
    age: 25,
    address: {
        city: "Toshkent",
        country: "O‘zbekiston"
    }
};
const { name1, age, address: { city, country } } = user6;
// console.log(name1,age,city);
// ----------------------------------------------
// TASK-6
const products = ["Noutbuk", "Telefon", "Planshet", "Smartwatch"];
const [firstProduct, secondProduct, ...otherProducts] = products;
// console.log(firstProduct);
// console.log(secondProduct);
// console.log(otherProducts);







