/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1) {
        return true
    }
    for(let i=0;i<50;i++) {
        let ans = Math.pow(2,i)
        if(ans==n) {
            return true
        }
    }
    return false
};