/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a = s.split(' ')
    let result = []
    for(let val of a){
        result.push(val.split('').reverse().join(''))
    }
    return result.join(' ')
};