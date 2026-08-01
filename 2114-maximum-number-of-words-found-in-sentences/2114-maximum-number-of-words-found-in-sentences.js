/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0;
    for(let sentence of sentences){
        let word=sentence.split(" ");
        max=Math.max(max,word.length)
    }
    return max;
};