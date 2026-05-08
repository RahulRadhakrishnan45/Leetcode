/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = []
    for(let i = left;i<=right;i++) {
        let no =i
        let isValid=true
        while(no>0){
            let digit = no%10
            if(digit ===0 || i%digit !==0){
                isValid =false
                break
            }
            no=Math.floor(no/10)
        } 
        if(isValid) result.push(i)
    }
    return result
};