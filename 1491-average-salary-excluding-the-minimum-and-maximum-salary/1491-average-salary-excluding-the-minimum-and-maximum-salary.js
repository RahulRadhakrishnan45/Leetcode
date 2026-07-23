/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum=0,count=0
    salary.sort((a,b)=>a-b)
    for(let i=1;i<salary.length-1;i++){
        sum+=salary[i]
        count++
    }
    return sum/count
};