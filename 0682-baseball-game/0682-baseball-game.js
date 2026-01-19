/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ops) {
    let a = []
    for(let i=0;i<ops.length;i++) {
        if(!isNaN(ops[i])) {
            a.push(Number(ops[i]))
        }else if (ops[i] === 'D') {
            a.push(a[a.length-1]*2)
        }else if (ops[i] === 'C') {
            a.pop()
        }else{
            a.push(a[a.length-1]+a[a.length-2])
        }
    }
    return a.reduce((a,b)=>a+b,0)
};