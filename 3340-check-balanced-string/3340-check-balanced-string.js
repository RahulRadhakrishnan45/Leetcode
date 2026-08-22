/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let odd= 0; 
    let even= 0;
    for(i=0;i<num.length;i++){
        if(i%2!==0){
            odd+=(num[i]-'0')
        }else{
            even+=(num[i]-'0')
        }
    }
    if(odd===even){
        return true
    }
    return false
};