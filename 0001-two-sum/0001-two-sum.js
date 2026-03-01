/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map  = {}
    let balance = 0
    for(let i=0;i<nums.length;i++) {
         balance = target - nums[i]
        if(map[balance] !== undefined) {
            return [map[balance],i]
        }
        map[nums[i]] = i
    }
    
};