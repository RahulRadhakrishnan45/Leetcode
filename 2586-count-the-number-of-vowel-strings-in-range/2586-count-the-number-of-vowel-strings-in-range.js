/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count = 0
    for(let i=left;i<=right;i++) {
        const val = words[i]
        if('aeiou'.includes(val[0]) && 'aeiou'.includes(val[val.length-1])) {
            count++
        }
    }
    return count
};