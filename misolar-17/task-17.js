// TASK - 2894
function permute(arr) {
    let result = [];
    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                let next = [...current, remaining[i]];
                let rest = remaining.slice(0, i).concat(remaining.slice(i + 1));
                backtrack(next, rest);
            }
        }
    }
    backtrack([], arr);
    return result;
}
let nums = [1, 2, 3, 4, 5, 6];
let permutations = permute(nums);
console.log(permutations);

// -----------------------------------------------------
// TASK - 2942
function moveIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 1)
            arr.push(0)
        }
    }
    console.log(arr);
}
// moveIndex([0, 1, 0, 3, 12])
// ---------------------------------------------------------
// TASK - 2942
function target(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (i != k && arr[i] + arr[k] == num) {
                return [i, k]
            }
        }
    }
}
// console.log(target([2, 7, 11, 15], 9));
// console.log(target([3,2,4],6));
// ---------------------------------------------------------


