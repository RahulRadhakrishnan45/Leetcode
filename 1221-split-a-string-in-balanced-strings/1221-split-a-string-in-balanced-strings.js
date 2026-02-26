/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0
    let c =0
    for(let i=0;i<s.length;i++) {
        if(s[i] === 'L') {
            c++
        }else{
            c--
        }
        if(c === 0) count ++
    }
    return count
};