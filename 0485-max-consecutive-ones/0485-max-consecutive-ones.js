/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let c = 0
    let max = 0
    for(let i=0;i<nums.length;i++) {
        if(nums[i]==1) {
            c++
            max = Math.max(max,c)
        }else{
            c=0
        }
    }
    return max
};