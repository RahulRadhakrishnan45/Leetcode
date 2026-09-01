/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let patSet = new Map()
    let sSet = new Map()
    let word = s.split(' ')
    if(pattern.length !== word.length) return false
    for(let i=0;i<word.length;i++){
        let pChar = pattern[i]
        let sChar = word[i]
        if(!patSet.has(pChar) && !sSet.has(sChar)){
            patSet.set(pChar,sChar)
            sSet.set(sChar,pChar)
        }else if(patSet.get(pChar) !== sChar) return false
        else if(sSet.get(sChar) !== pChar) return false
    }
    return true
};