/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let a =new Set(nums)
    let r=[]
    for(i=1;i<=nums.length;i++){
        if(!a.has(i)){
            r.push(i)
        }
    }return r
};