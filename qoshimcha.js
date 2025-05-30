function addTask(obj, name1, isdone) {
    obj.push({
        id: obj.length + 1,
        name: name1,
        isDone: isdone
    })
};
function showTask(obj) {
    for (let item of obj) {
        console.log(`ID: ${item.id}\tHARAKAT: ${item.name}\t\tSTATUS: ${item.isDone}`);
    }
}
function update(obj) {

}
function _delete(obj) {

}
let toDo = [
    {
        id: 0,
        name: "Uygo'nish",
        isDone: true
    },
    {
        id: 1,
        name: "Hamomga-kirish",
        isDone: false
    },
    {
        id: 2,
        name: "Nonushta qilish",
        isDone: true
    },
]
console.log("\tToDo\n1. addTask\n2. showTask\n3. update\n4. delete");
let ask = 1
if (ask == 1) {
    console.clear()
    addTask(toDo, "Yugirish", true)
    showTask(toDo)
} else if (ask == 2) {
    console.clear()
    showTask(toDo)
} else if (ask == 3) {
    console.clear()
    update(toDo)
} else if (ask == 4) {
    console.clear()
    _delete(toDo)
} else {
    console.clear()
    console.log("Xato urinish!");
    return 0
}

