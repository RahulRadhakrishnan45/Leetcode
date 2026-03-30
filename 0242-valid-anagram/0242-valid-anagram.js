/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length)  return false
    let fre = {}
    for(let char of s) {
        fre[char]=(fre[char]||0)+1
    }
    for(let char of t) {
        if(!fre[char]) return false
        fre[char]--
    }
    return true
};