/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let age =''
    let count = details.reduce((acc,val)=>{
        age = val[11]+val[12]
        if(Number(age)>60) return ++acc
        else return acc
    },0)
    return count
};