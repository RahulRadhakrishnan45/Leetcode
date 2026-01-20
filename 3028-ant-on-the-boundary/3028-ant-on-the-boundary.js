/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let pos = 0, count =0
    for(let i=0;i<nums.length;i++) {
        pos += nums[i]
        if(pos === 0) {
            count ++ 
        }
    }
    return count
};