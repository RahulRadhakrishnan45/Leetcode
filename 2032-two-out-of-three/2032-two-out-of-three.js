/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let result = []
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let set3 = new Set(nums3)
    let a = new Set([...nums1,...nums2,...nums3])
    for(let num of a) {
        let count = 0
        if(set1.has(num)) count++
        if(set2.has(num)) count++
        if(set3.has(num)) count++

        if(count>=2) result.push(num)
    }
    return result
}