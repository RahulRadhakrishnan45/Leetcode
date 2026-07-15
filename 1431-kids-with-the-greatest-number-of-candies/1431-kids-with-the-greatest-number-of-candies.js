/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    let result=[]
    for(let val of candies){
        if(val+extraCandies >= max) result.push(true)
        else result.push(false)
    }
    return result
};