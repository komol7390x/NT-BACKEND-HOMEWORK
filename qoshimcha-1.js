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
console.log(toKey(obj1));