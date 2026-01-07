/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a = s.trim().split(' ')
    console.log(a[0])
    let b = []
    for(let i=a.length-1;i>=0;i--) {
        if(a[i]!=''){
            b.push(a[i])
        }
    }
    return b.join(' ')
};