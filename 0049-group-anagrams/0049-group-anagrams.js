/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {}
  for(let words of strs) {
    let a = new Array(strs.length-1).fill(0)
    let key = words.split('').sort().join('')
    if(!map[key]) {
        map[key] = []
    }
    map[key].push(words)
  }  
  return Object.values(map)
};