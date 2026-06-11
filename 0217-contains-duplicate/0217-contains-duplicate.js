/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let a = [...new Set(nums)]
    if(nums.length>a.length){
        return true
    }
    return false
};