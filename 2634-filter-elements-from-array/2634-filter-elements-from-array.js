/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let a = []
    for(let i=0;i<arr.length;i++) {
        let val = fn(arr[i],i)
        if(Boolean(val)===true){
            a.push(arr[i])
        }
    }
    return a
};