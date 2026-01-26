/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b)
    let result = []
    let val = Infinity
    for(let i=1;i<arr.length;i++) {
        let diff = arr[i]-arr[i-1]
        if(diff < val) {
            val = diff
            result =[ [arr[i-1],arr[i]]]
        }else if(diff === val) {
            result.push([arr[i-1],arr[i]])
        }
    }
    return result
};