// TASK-1
var removeDuplicates1 = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++){
        if (!arr.includes(nums[i])) {
            arr.push(nums[i])
        }
    }
    return arr
};
var removeDuplicates2 = function (nums) {
    return [...new Set(nums)]
};
console.log(removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// ------------------------------------------------------------------
// TASK-2
var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return 1 + Math.max(left, right);
};