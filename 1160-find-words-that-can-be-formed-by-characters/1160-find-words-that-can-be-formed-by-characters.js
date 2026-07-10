/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let freq = chars.split('').reduce((acc,val)=>{
        acc[val]=(acc[val]||0)+1
        return acc
    },{})
    let res = 0
    for(let word of words){
        let copy = {...freq}
        for(let w of word){
            if(copy[w]!==0&&w in copy) {
                copy[w] -= 1
            }else{
                res-= word.length
                break
            }
        }
        res+=word.length
    }
    return res
};