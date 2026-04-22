/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let a = nums.splice(0,n)
    let result = []
    for(let i=0;i<n;i++){
        result.push(a[i],nums[i])
    }
    return result
};