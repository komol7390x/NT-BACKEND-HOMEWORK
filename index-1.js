// TASK-1
function checkText(str) {
    str=str.split(" ")
    let newMap1 = new Map();
    for (let item of str) {
        if (!newMap1.has(item)) {
            newMap1.set(item, 1)
        } else 
        newMap1.set(item,newMap1.get(item)+1)
    }
    return newMap1
}
let str1 = "apple banana apple orange banana apple";
// console.log(checkText(str1));

// --------------------------------------------------------
// TASK-2
function idToKey(arr) {
    let newMap = new Map();
    for (let item of arr) {
        newMap.set(item.id,item.name)
    }
    return newMap
}
const arr1 = [{ id: 1, name: 'Ali' }, { id: 2, name: 'Vali' }];
// console.log(idToKey(arr1));
// --------------------------------------------------------
// TASK-3
function findKeyInMap(map1, num) {
    for (let [key, val] of map1) {
        if (val == num) {
           return key
       }
    }
    return undefined
}
let map1 = new Map();
map1.set('a',1).set("b",2).set("c",3)
// console.log(findKeyInMap(map1,2));
// --------------------------------------------------------
// TASK-4
function sortMap(map) {
    let map2 = new Map([...map].sort())
    return map2
}
let map2 = new Map([["banana", 2], ["apple", 3], ["orange", 1], ["anor", 4], ["ananas", 5]])
// console.log(sortMap(map2));
// --------------------------------------------------------
// TASK-5
function addMap(map1, map2) {
    for (let [key, val] of map1) {
        if (!map2.has(val)) 
            map2.set(key, val)
    }
    return map2
}

const map3 = new Map([
    ['a', 1],
    ['i', 1],
    ['b', 2],
    ['c', 3],
    ['e', 4]
]);

const map4 = new Map([
    ['b', 20],
    ['g', 20],
    ['c', 30],
    ['d', 40],
    ['f', 40]
]);
// console.log(addMap(map3,map4));
// --------------------------------------------------------
// TASK-6
function findNumber(map) {
    for (let [key, val] of map) {
        if (typeof val == "number") {
            map.set(key,val*2)
        }
    }
    return map
}
const num2 = new Map([
    ['a', 10],
    ['b', 'salom'],
    ['c', 5],
    ['d', true],
    ['e', 3]
]);
// console.log(findNumber(num2));
// --------------------------------------------------------
// TASK-7
function changeValue(map) {
    let map2=new Map()
    for (let [key, val] of map) {
        map2.set(val,key)
    }
    return map2
}
const map5 = new Map([["x", 1], ["y", 2], ["z", 3]]);
console.log(changeValue(map5));
// --------------------------------------------------------
// TASK-8

