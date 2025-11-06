/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
   let seen ={}

   for(let i=0;i<magazine.length;i++) {
    seen[magazine[i]] = (seen[magazine[i]] || 0) +1
   }

   for(let i=0;i<ransomNote.length;i++) {
    if(!seen[ransomNote[i]] || seen[ransomNote[i]]===0) {
        return false
    }
    seen[ransomNote[i]] = seen[ransomNote[i]] -1
   }
   return true
};