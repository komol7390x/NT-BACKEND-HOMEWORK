// TASK-1
let arr1 = [1, 4, 7, 10, 3, 8];
let arr2 = arr1.filter(x => x % 2 == 0)
console.log(arr2);
// ------------------------------------------
// TASK-2
let arr3 = [2, 3, 5];
console.log(arr3.map(x=>x*x));
// ------------------------------------------
// TASK-3
let arr4 = ["banan", "shaftoli", "olma", "gilos"];
console.log(arr4.includes("olma"));
// ------------------------------------------
// TASK-4
let arr5 = [3, 7, 1, 9];
console.log(arr5.length);
// ------------------------------------------
// TASK-5
let arr8 = [10, 20, 30];
arr8.shift()
console.log(arr8);
// ------------------------------------------
// TASK-6
let arr6 = [5, 10, 15];
arr6.unshift(2)
console.log(arr6);
// ------------------------------------------
// TASK-7
let arr7 = [1, 2, 3, 4];
arr7.pop();
console.log(arr7);
// ------------------------------------------
// TASK-8
let arr9 = [8, 9]
arr9.push(10);
console.log(arr9);
// ------------------------------------------
// TASK-9
let arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 2);
console.log(arr10);
// ------------------------------------------
// TASK-10
let arr11 = [10, 20, 30, 40, 50];
let arr12 = arr11.slice(3)
console.log(arr12);
// ------------------------------------------
// TASK-11
let arr13 = [1, 2].concat([3, 4]);
console.log(arr13);
// ------------------------------------------
// TASK-12
console.log([5, 10, 15, 20].indexOf(15));
// ------------------------------------------
// TASK-13
console.log([3, 7, 3, 1, 3].lastIndexOf(3));
