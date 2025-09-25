/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('')
    const vowels = new Set('aeiouAEIOU')
    let first = 0
    let end = s.length-1
    while (first < end) {
        while(first < end && !vowels.has(s[first])) {
            first++
        }
        while(first < end && !vowels.has(s[end])) {
                end--
        }
        if(first < end) {
            [s[first],s[end]] =[s[end],s[first]]
            first++
            end--
        }
    }
    return s.join('')
};