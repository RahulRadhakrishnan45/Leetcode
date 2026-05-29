/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    nums.push(target)
    nums.sort((a,b)=>a-b)
    let a = [...new Set(nums)]
    for(i=0;i<a.length;i++){
        if(a[i]==target){
            return i
        }
    }
};