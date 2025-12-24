/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum =0
    for(let i =0;i<accounts.length;i++) {
        let val=accounts[i].reduce((acc,val)=>acc+val)
        if(val>sum) {
            sum= val
        }
    }
    return sum
};