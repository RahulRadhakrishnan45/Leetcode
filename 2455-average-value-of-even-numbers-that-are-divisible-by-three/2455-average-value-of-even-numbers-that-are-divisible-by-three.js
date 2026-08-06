/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum=0, count=0
    for(let val of nums){
        if(val%2==0 && val%3===0) {
            sum=sum+val
            count++
        }
    }
    if(count!==0) return Math.floor(sum/count)
    return 0
};