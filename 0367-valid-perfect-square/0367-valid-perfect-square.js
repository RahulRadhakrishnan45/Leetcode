/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num < 2) return true
    let left = 2, right = Math.floor(num / 2)
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let squared = mid * mid
        if (squared === num) return true
        else if (squared < num) left = mid + 1
        else if (squared > num) right = mid - 1
    }
    return false
};