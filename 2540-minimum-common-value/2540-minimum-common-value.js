/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let a = new Set(nums1)
    for(let no of nums2)
    if(a.has(no)){
        return no
    }
  return -1
};