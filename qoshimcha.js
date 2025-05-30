let toDo = {
    list: [
        { id: 1, name: "Uygo'nish", isDone: true },
        { id: 2, name: "Hamomga-kirish", isDone: false },
        { id: 3, name: "Nonushta qilish", isDone: true },
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
                console.log(id+" id yangilandi\n");
                item.name = newName,
                item.Isdone=Isdone
            }
        }
    },
    _delete:function(id){
        this.list = this.list.filter(x => !(x.id == id))
        console.log(id+"-id o'chirildi\n");
    }

}
let ask =3
console.log("\tToDo\n1. addTask\n2. showTask\n3. update\n4. delete\n\n");
if (ask == 1) {
    toDo.addTask("Yugirish", true)
    toDo.showTask()
} else if (ask == 2) {
    toDo.showTask()
} else if (ask == 3) {
    toDo.update(1, "Uhlab-qoldi", true)
    toDo.showTask()
} else if (ask == 4) {
    toDo._delete(2)
    toDo.showTask()
} else {
    console.log("Xato urinish!");
    return 0
}

