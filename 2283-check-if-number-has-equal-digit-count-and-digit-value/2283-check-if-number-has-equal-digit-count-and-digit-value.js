/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let b = num.split('')
    let a = b.reduce((acc,val)=>{
        acc[val] = (acc[val] || 0) +1
        return acc
    },{})
    for(let i=0;i<b.length;i++) {
        let expected = Number(b[i])
        let actual = a[i] || 0
        if(expected != actual) return false
    }
    return true
};