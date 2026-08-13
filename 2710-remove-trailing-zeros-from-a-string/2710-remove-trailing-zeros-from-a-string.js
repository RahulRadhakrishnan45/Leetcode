/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let a =num.split('')
    while(a[a.length-1]==='0'){
        a.pop()
    }
    let b= a.join('')
    return b
};