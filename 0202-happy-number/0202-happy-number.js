/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function nextNum(num) {
        let total = 0
        while(num>0) {
            let digit = num%10
            total += digit*digit
            num = Math.floor(num/10)
        }
        return total
    }
    let slow = n
    let fast = nextNum(n)
    while(fast !=1 && slow != fast) {
        slow = nextNum(slow)
        fast = nextNum(nextNum(fast))
    }
    return fast == 1
};