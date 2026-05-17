/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq = {}
    for(let char of s){
        freq[char] = (freq[char] || 0) +1
    }
    return Object.keys(freq)
    .sort((a,b)=>freq[b]-freq[a])
    .map(char =>char.repeat(freq[char])).join('')
};