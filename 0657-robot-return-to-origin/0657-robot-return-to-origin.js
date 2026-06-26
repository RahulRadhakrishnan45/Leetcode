/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let u=0,d=0,r=0,l=0
    for(let val of moves){
        if(val==='U') u++
        else if(val==='D') d++
        else if(val==='L') l++
        else r++
    }
    return u==d&&r==l
};