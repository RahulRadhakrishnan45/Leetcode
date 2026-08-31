/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let stMap = new Map()
    let tsMap = new Map()
    for(let i=0;i<s.length;i++){
        let sChar = s[i]
        let tChar = t[i]
        if(!stMap.has(sChar) && !tsMap.has(tChar)) {
            stMap.set(sChar,tChar)
            tsMap.set(tChar,sChar)
        }else if(stMap.get(sChar) !== tChar) return false
        else if(tsMap.get(tChar) !== sChar) return false
    }
    return true
};