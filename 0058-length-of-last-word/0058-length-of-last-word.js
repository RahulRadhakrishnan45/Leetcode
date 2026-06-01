/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a = s.trim()
    let b= a.split(' ')
    return  b[b.length-1].length
};