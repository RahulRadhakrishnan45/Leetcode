/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let n = score.length
    let result = Array(n)
    let a = score.map((val,ind)=>[val,ind])
    a.sort((a,b)=>b[0]-a[0])
    for(let i=0;i<n;i++) {
        let pos = i+1
        let orgInd = a[i][1]
        if(pos === 1) {
            result[orgInd] = 'Gold Medal'
        }else if(pos === 2) {
            result[orgInd] = 'Silver Medal'
        }else if (pos === 3) {
            result[orgInd] = 'Bronze Medal'
        }else{
            result[orgInd] = `${pos}`
        }
    }
    return result
};