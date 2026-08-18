/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let a= []
    let c= words.filter((data,index)=>{
        if(data.includes(x)){
            a.push(index)
        }
    })
     return a 
};