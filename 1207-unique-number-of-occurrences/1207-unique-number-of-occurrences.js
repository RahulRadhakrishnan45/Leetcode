/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let a = arr.reduce((acc,val)=> {
        acc[val] = (acc[val] || 0) +1
        return acc
    },{})
    let b = Object.values(a)
    let c =[... new Set(b)]
    return b.length == c.length
};