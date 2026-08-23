/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    nums.sort((a, b) => a - b);
    let res = k;
    for (let num of nums)
        if (num === res) res += k;
    return res;
};