/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let a = nums.reduce((acc,val)=>acc+val)
    if(a%k==0){
        return 0
    }
    return a%k
};