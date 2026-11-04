/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber (nums) {
    let a=nums.sort((a,b)=>a-b)
    for(let i=0;i<a.length;i++){
        if(a[i]!==i){
            return i
        }
    
        }
            return a.length
    
};