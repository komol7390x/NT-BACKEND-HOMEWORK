// @ -1, 55 + 0, 0 @@
// TASK-1
function countTrue(arr) {
    return arr.filter((x) => x == true).reduce((acc, item) => (acc += +item), "").length
}
console.log(countTrue([false, false, false, false]));
console.log(countTrue([true, false, false, true, true]));
console.log(countTrue([]));
// ------------------------------------------------------------------------------------------------------
// TASK-2
function multiply(arr, mult) {
    return arr.map(x => x * mult)
}
console.log(multiply([1, 2, 3], 2));
console.log(multiply([4, 6, 5], 10));
// ------------------------------------------------------------------------------------------------------
// TASK-3
function sumOfCubes(arr) {
    return arr.map(x => x ** 3).reduce((acc, item) => acc += item)
}
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));
// ------------------------------------------------------------------------------------------------------
// TASK-4
function spelling(str) {
    let arr1 = [];
    let str1 = "";
    for (let item in str) {
        str1 += str[item];
        arr1.push(str1)
    }
    return arr1
}
console.log(spelling("bee"));
console.log(spelling("happy"));
// ------------------------------------------------------------------------------------------------------
// TASK-5
function chatroomStatus(arr) {
    if (arr.length == 0) {
        return []
    } else if (arr.length == 1) {
        return arr[0]
    } else if (arr.length == 2) {
        return `${arr[0]} and ${arr[1]}`
    } else {
        return `${arr[0]},${arr[1]} and ${arr.length - 2} more online`
    }
}
console.log(chatroomStatus([]));
console.log(chatroomStatus(["paRIE_to"]));
console.log(chatroomStatus(["s234f", "mailbox2"]));
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));




