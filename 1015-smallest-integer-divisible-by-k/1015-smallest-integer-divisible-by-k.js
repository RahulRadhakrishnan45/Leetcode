/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if(k%2 === 0) return -1
    let r = 0
    for(let l=1;l<=k;l++){
        r =(r*10+1)%k
        if(r === 0 ) {
            return l
        }
    }    
    return -1
};