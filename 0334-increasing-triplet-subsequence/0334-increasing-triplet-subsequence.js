/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity, second = Infinity
    for(let no of nums) {
        if(no <= first) {
            first = no
        }else if(no <= second) {
            second = no
        }else return true
    }
    return false
};