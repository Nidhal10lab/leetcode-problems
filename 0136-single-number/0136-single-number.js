/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let a=nums.reduce((a,b)=>a^b,0)
    return a
}  
