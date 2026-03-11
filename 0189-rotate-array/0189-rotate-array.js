/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let result = []
    let n = nums.length
    let step = k%n
    for(let i=n-step;i<nums.length;i++) {
        result.push(nums[i])
    }   
    for(let i=0;i<n-step;i++) {
        result.push(nums[i])
    }
    for(let i=0;i<n;i++) {
        nums[i] = result[i]
    }
};