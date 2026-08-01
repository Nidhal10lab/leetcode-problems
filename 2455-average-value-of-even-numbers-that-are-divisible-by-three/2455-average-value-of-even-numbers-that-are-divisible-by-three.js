/**
 * @param {number[]} nums
 * @return {number}
 */
// var averageValue = function(nums) {
    
// };
 function averageValue(nums){
    let b=nums.filter(num=>num%6==0)
    let c=b.reduce((a,b)=>a+b,0)
   if(b.length===0){
    return 0
   }
    return Math.floor(c/b.length)}


 
 
