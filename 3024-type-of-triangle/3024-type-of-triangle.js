/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    nums.sort((a,b)=>a-b)
    if(nums[0]+nums[1]<=nums[2]) return 'none'
    let a = [...new Set(nums)]
    if(a.length == 1) {
        return 'equilateral'
    }else if(a.length ==2) {
        return 'isosceles'
    }else {
        return 'scalene'
    }
};