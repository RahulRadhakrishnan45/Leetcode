/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0
    let a = String(num)
    for(let i =0; i<a.length;i++) {
        if(num%Number(a[i])==0) {
            count++ 
        }
    }
    return count
};