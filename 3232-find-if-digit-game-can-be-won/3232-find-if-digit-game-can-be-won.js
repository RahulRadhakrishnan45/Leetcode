/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let single=0;
    let double=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<10){
            single=nums[i]+single;
        }else if(nums[i]>=10){
            double=nums[i]+double;
        }
    }
    return (single>double)||(double>single)
};