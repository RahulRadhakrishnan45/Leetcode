/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let a =0
    let b =0
    for(i=1;i<=n;i++){
        if(i%m!=0){
            a+=i
        }else{
            b+=i
        }
    }
    let r = a-b
    return r
};