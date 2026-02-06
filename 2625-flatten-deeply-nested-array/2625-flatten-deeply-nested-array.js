/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let b = []
    function helper(array,depth) {
        for(let val of array) {
            if(Array.isArray(val) && depth > 0) {
                helper(val,depth-1)
            }else{
                b.push(val)
            }
        }
    }
    helper(arr,n)
    return b
};