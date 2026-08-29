/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let a = nums.map(String)
    a.sort((a,b)=>{
        const ab = a+b
        const ba = b+a
        if(ab>ba) return -1
        if(ba>ab) return 1
        return 0
    })
    if(a[0]==='0') return '0'
    return a.join('')
};