/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums,target,s=0,e=nums.length-1) {
    if(s>e) return -1
    let mid = Math.floor((s+e)/2)
    if(target === nums[mid]) return mid
        if(target<nums[mid]) return search(nums,target,s,mid-1)
        return search(nums,target,mid+1,e)
};