/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max =0, diff =0
    for(let i=0;i<nums.length-1;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[j]>nums[i]) {
                diff = nums[j]-nums[i]
            }
            if(diff>max) {
                max =diff
            }
        }
    }
    if(max === 0) return -1
    return max
};