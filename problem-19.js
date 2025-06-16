// TASK-26
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
// console.log(removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// ------------------------------------------------------------------
// TASK-104
var maxDepth = function (root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
// ------------------------------------------------------------------
// TASK - 217
var containsDuplicate = function (nums) {
    const len=[...new Set(nums)].length
    return len==nums.length
};
// console.log(containsDuplicate([1, 2, 3,4,4]));
// ------------------------------------------------------------------
// TASK - 121
var maxProfit = function (prices) {
    if (prices.length == 0) {
        return 0;
    }
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};

