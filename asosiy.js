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
console.log(getSubscriptionDays(user1));
user2 = null;
console.log(getSubscriptionDays(user2));
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
console.log(getPassword(user3));
console.log(getPassword(user4));
// ----------------------------------------------
// TASK-3
let user5 = {
    name: "Sardor",
    age:22
}
