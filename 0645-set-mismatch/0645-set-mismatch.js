/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
   let seen = new Set()
   let duplicate =-1
   let total = 0
   for (let num of nums) {
    if(seen.has(num)) {
        duplicate = num
    }
    seen.add(num)
    total+=num
   }
   let n = nums.length
   let expectedSum = n*((n+1)/2)
   let missing = expectedSum -(total-duplicate)
   return [duplicate,missing]
};