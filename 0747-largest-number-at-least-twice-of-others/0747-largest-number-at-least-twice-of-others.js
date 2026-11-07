/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
   let a = [...nums].sort((a,b) => b-a);
    let b=a[0]
    let c=a[1]
    if(nums.length===1||b>=c*2){
        return nums.indexOf(b)
    }
    else{
        return -1
    }
};