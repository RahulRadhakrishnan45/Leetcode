/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) { 
  arr.sort((a,b)=>a-b)
  let sum=0;
  let k = Math.floor(arr.length*.05)
  for(i=k;i<arr.length-k;i++){
    sum+=arr[i]
  }  
  return sum/(arr.length-(2*k))
};