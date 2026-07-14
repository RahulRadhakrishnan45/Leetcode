/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let a = arr.reduce((acc,val)=>{
        acc[val]=(acc[val]||0)+1
        return acc
    },{})
    let max=-1
    for(let val in a){
        if(Number(val)===a[val]&&a[val]>max){
            max=Math.max(max,a[val])
        }
    }
    return max
};