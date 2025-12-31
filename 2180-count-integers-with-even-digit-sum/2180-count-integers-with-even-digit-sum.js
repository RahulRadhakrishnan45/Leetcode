/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0
    for(let i=1;i<=num;i++) {
        if(i<10 && i%2==0 ) {
            count++
        }else if(i>=10) {

            let b =String(i).split('')
            let c = b.reduce((acc,val)=>acc+Number(val),0)
            if(c%2===0){
                count++
            }
        }
    }
    return count
};