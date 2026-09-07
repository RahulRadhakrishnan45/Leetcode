/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = []
    let count = new Map()
    for(let val of nums1) {
        count.set(val,(count.get(val) ||0) +1)
    }
    for(let val of nums2){
        if(count.get(val) > 0) {
            res.push(val)
        }
        count.set(val,count.get(val)-1)
    }
    return res
}