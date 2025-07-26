/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    let fre = nums.reduce((acc,val)=>{
        acc[val]=(acc[val]||0)+1
        return acc
    },{})
    const prime = (val) =>{
        if(val<2)return false
        for(i=2;i*i<=val;i++){
            if(val%i==0)
                return false}
            return true
        }
    
    for(let val in fre){
        if(prime (fre[val]) )
        return true
    }return false
};