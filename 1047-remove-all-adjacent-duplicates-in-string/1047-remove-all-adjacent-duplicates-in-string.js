/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let a = []
    for(let i=0;i<s.length;i++) {
        if(a.length>0 && a[a.length-1] === s[i] ) a.pop()
        else a.push(s[i]) 
    }
    return a.join('')
};