/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let l = 0 , r = 1 , res = 0
    nums.sort((a,b) => a-b)
    while(r<nums.length) {
        let diff = nums[r] - nums[l]
        if(diff ===1) {
            res = Math.max(res, r-l +1)
            r++
        }else if(diff <1) r++
        else l++
    }
    return res
};