/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let r = []
    for(i=0;i<nums.length;i++){
        if(nums[i]==target){
            r.push(i)
        }
    }
    return r
};