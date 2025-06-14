// TASK - 2894
var differenceOfSums = function (n, m) {
    let numArr = [];
    let sum = 0
    let inter = 0
    for (let i = 1; i <= n; i++) {
        if (i % m == 0) {
            inter += i
        } else {
            sum += i
        }
    }
    sum -= inter
    return sum
};
// console.log(differenceOfSums(5, 1));
// -----------------------------------------------------
// TASK - 2942
var findWordsContaining = function (words, x) {
    let arr = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            arr.push(i)
        }
    }
    return arr
};
words = ["abc", "bcd", "aaaa", "cbc"], x = "a"
const res = findWordsContaining(words, x);
// console.log(res);
// ---------------------------------------------------------
// TASK - 2942
var triangleType = function (nums) {
    [a, b, c] = nums
    console.log(a, b, c);
    if (a == b && b == c && a == c) {
        return 'equilateral'
    } else if ((a == b || b == c || a == c) && (a + b > c && a + c > b && b + c > a)) {
        return "isosceles"
    } else if (a + b > c && a + c > b && b + c > a) {
        return 'scalene'
    } else {
        return 'none'
    }

};
// console.log(triangleType([3, 3, 3]));
// console.log(triangleType([3, 4, 5]));
// console.log(triangleType([3, 4, 4]));
// console.log(triangleType([3, 5, 9]));
// ---------------------------------------------------------
// TASK-9
var isPalindrome = function (x) {
    const y = x.toString().split("").reverse().join("")
    return y==x.toString()
};
// console.log(isPalindrome(121));
// console.log(isPalindrome(10));
// ---------------------------------------------------------
// TASK-35
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.at(-1); i++){
        if (target <= nums[i]) {
            return i
        }
    }
    return nums.length
};
console.log(searchInsert([1, 3, 5, 6], 5));