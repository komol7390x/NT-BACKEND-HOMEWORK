// TASK-1
function countAlpha(str) {
    let map = new Map();
    str=str.split("")
    for (let key of str) {
        if (!(map.has(key))) {
            map.set(key, 1);
            continue
        }
        map.set(key,map.get(key)+1)
    }
    return map
}
let str1 = "programming";
// console.log(countAlpha(str1));
// -------------------------------------------------
// TASK-2
function toKey(obj) {
    let map = new Map();
    for (let key of obj) {
        if (!(map.has(key.id))) {
            map.set(key.id, key.score)
            continue
        }map.set(key.id,map.get(key.id)+key.score)
    }
    return map
}
let obj1 = [{ id: 1, score: 80 }, { id: 2, score: 75 }, { id: 1, score: 90 }, { id: 2, score: 85 }];
// console.log(toKey(obj1));
// -------------------------------------------------
// TASK-3
function findText(arr) {
    let map = new Map();
    for (let key of arr) {
        if (!(map.has(key))) {
            map.set(key, 1);
        }else
            map.set(key, map.get(key) + 1)
    }
    return map
}
let arr2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
// console.log(findText(arr2));
// -------------------------------------------------
// TASK-4
function sumAge(arr) {
    let map = new Map();
    for (let key of arr) {
        if (!map.has(key.age)) {
            map.set(key.age, 1);
        }else
            map.set(key.age,map.get(key.age)+1)
    }
    return map
}
let arr3 = [{ name: "Ali", age: 25 }, { name: "Vali", age: 30 }, { name: "Hasan", age: 25 }];
// console.log((sumAge(arr3)));
// -------------------------------------------------
// TASK-5
function intersection(arr1, arr2) {
    let map = new Map();
    for (let item of arr1) {
        if (arr2.includes(item)) { 
            if (!(map.has(item))) {
                map.set(item, 1);
            } else
                map.set(item, map.get(item) + 1)
        }
    }
    return map
}
let arr4 = [1, 2, 2, 3];
let arr5 = [2, 2, 4,3];
console.log(intersection(arr4,arr5));
