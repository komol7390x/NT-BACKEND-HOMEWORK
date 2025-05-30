let toDo = {
    list: [
        { id: 0, name: "Uygo'nish", isDone: true },
        { id: 1, name: "Hamomga-kirish", isDone: false },
        { id: 2, name: "Nonushta qilish", isDone: true },
      ],
    showTask: function () {
        this.list.forEach((item) => console.log(`ID: ${item.id} HARAKAT: ${item.name}\t STATUS: ${item.isDone}`))
    },
    addTask: function(name1,isDone){
        this.list.push({ id: this.list.length + 1, name: name1, isDone: isDone })
        console.log(name1+" qo'shildi\n");
    },
    update: function(id,newName,Isdone){
        for (item of this.list) {
            if (item.id == id) {
                item.name = newName,
                item.Isdone=Isdone
            }
        }
        console.log(id+" id yangilandi\n");
    },
    _delete: () => {
        
    }

}
console.log("\tToDo\n1. addTask\n2. showTask\n3. update\n4. delete");
let ask = 4
if (ask == 1) {
    console.clear()
    toDo.addTask("Yugirish", true)
    toDo.showTask()
} else if (ask == 2) {
    console.clear()
    toDo.showTask()
} else if (ask == 3) {
    console.clear()
    toDo.update(0, "Uhlab-qoldi", true)
    toDo.showTask()
} else if (ask == 4) {
    console.clear()
    toDo._delete()
} else {
    console.clear()
    console.log("Xato urinish!");
    return 0
}

