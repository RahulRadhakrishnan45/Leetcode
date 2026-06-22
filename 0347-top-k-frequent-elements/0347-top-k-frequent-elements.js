/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let a = nums.reduce((acc,val)=>{
        acc[val]=(acc[val] || 0)+1
        return acc
    },{})
    let r = []
    let b = Object.entries(a)
    b.sort((a,b)=>b[1]-a[1])
    for(let i=0;i<k;i++){
        r.push(Number(b[i][0]))
    }
    return r
};