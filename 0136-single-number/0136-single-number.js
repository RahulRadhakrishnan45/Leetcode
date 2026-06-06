/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const x= nums.filter((data)=>nums.indexOf(data)===nums.lastIndexOf(data));
        return x[0]
};