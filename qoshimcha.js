let calc = (a, b) => ({ A: n => a * n, B: n => b * n });
const { A: x, B: y } = calc(4, 3);
// console.log(x(3) + y(2)); //18
// ---------------------------------------------------------
function avergeScore(set1) {
    let max = 0;
    let average = (num) => num.reduce((acc, b) => acc += b) / num.length;
    for (let key of set1) {
        let a = average(key.scores)
        if (max <= a) {
            max = a;
        }
    }
    let arr = [...set1].filter(x => average(x.scores) == max)
    let newArr = []
    for (let key of arr) {
        newArr.push({ name: key.name, average: max })
    }
    return newArr
}

const students = new Set([
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [100, 100, 100] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
]);
// console.log(avergeScore(students));
// ---------------------------------------------------------
const employees = new Set([
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "MOLIYA" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "BUXALTIR" },
    { name: "David", salary: 70000, department: "IT" },
])
function highSalary(set1) {
    let map = new Map();
    for (let item of set1) {
        if (!(map.has(item.department))) {
            map.set(item.department, item.salary)
        } else {
            map.set(item.department, map.get(item.department) + item.salary)
        }
    }
    map = [...map].sort((a, b) => b[1] - a[1]);
    let arr2 = [];
    let max = map[0][1];
    for (key of map) {
        if (max == key[1]) {
            arr2.push({ department: key[0], average: key[1] })
        }
    }
    return arr2
}
console.log(highSalary(employees));


