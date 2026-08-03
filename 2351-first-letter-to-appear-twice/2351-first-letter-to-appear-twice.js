/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let set = new Set()
    for(val of s){
        if(set.has(val)){
            return val
        }
        set.add(val)
    }
};