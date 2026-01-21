/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let l = 0, r = 0, space = 0
    for(let i=0;i<moves.length;i++) {
        if(moves[i]==='L') l++
        else if(moves[i]==='R') r++
        else{
            space++
        }
    }
    return Math.abs(l-r)+space
};