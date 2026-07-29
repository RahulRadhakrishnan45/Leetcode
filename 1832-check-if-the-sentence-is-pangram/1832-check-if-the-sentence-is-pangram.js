/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let a = sentence.split('')
    let b = [...new Set(a)]
    if(b.length==26){
        return true
    }
    return false
};