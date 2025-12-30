/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const arr = []
    for(let i=0;i<words.length;i++) {
        let a = words[i].split(separator)
        let b = a.filter((val)=>val.length>0)
        arr.push(b)
    }
    return arr.flat(Infinity)
};