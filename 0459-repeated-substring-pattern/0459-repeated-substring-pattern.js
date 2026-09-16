/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let double = s+s
    let sub = double.slice(1,-1)
    return sub.includes(s)
};