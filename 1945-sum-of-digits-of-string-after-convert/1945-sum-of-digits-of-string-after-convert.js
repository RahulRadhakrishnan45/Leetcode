/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let no = ''
    for(let i=0;i<s.length;i++) {
        no+= String(s.charCodeAt(i)-96)
    }
    while(k>0) {
        let sum = 0
        for (let val of no) {
            sum+= Number(val)
        }
        no = String(sum)
        k--
    }
    return Number(no)
};