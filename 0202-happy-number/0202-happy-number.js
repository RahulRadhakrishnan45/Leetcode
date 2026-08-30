/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function sumOfSquares(num){
        let sum = 0
        while(num>0){
            let digit = num%10
            sum += digit * digit
            num = Math.floor(num/10)
        }
        return sum
    }
    let slow = n
    let fast = n
    do{
        slow=sumOfSquares(slow)
        fast=sumOfSquares(sumOfSquares(fast))
    } while(slow !== fast)

    return slow === 1
};