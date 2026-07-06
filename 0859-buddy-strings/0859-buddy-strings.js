/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false
    let set= new Set()
    if(s===goal){
        for(let char of s){
            if(set.has(char)) return true
            set.add(char)
        }
        return false
    }
    let diff=[]
    for(let i=0;i<s.length;i++){
        if(s[i] !== goal[i]) {
            diff.push(i)
        }
    }
    if(diff.length !== 2) return false
    return (s[diff[0]]===goal[diff[1]] && s[diff[1]]===goal[diff[0]])
};