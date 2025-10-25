/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let n = String(x)
    let d = 0
    for(let no of n) {
        d+=Number(no)
    }
    if(x%d==0){
        return Number(d)
    }
    return -1
};