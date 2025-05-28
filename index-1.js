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
    
}
let map2 = new Map([["banana", 2], ["apple", 3], ["orange", 1], ["anor", 4]])
console.log(sortMap(map2));


