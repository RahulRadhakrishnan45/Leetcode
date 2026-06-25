/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = [...new Set(nums)]
    set.sort((a,b)=>b-a)
    if(set.length>2) return set[2]
    else return set[0]
};