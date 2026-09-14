/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1, right = n
    while(left <= right) {
        let mid = Math.floor(left + (right-left)/2)
        let coin = mid * ((mid +1)/2) 
        if(coin === n) return mid
        else if(coin < n) left = mid+1
        else if (coin > n) right = mid-1
    }
    return right
};