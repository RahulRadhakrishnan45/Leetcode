/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let occurance = {}
    for(let i=0;i<s.length;i++){
        occurance[s[i]] = i
    }
    let visited = new Set()
    let stack = []
    for(let i=0;i<s.length;i++){
        if(visited.has(s[i])) continue
        while(stack.length >0 && s[i]<stack[stack.length-1] && i<occurance[stack[stack.length-1]]){
            visited.delete(stack.pop())
        }
        stack.push(s[i])
        visited.add(s[i])
    }
    return stack.join('')
};