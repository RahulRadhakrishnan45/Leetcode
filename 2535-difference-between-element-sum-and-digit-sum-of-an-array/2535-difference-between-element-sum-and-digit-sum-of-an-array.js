/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = nums.reduce((acc,val)=>acc+val)
    let sum1 = 0
    let a = nums.join('')
    for(let val of a){
        sum1+=Number(val)
    }
    return Math.abs(sum-sum1)
};