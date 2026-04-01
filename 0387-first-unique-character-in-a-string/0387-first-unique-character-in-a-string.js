/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let fre = {}
    for(let char of s) {
        fre[char] = (fre[char]||0)+1
    }   
    for(let i=0;i<s.length;i++){
        if(fre[s[i]]===1) {
            return i
        }
    }
    return -1
};