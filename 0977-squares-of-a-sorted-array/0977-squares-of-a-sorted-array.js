/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares (nums) {
    let a=nums.map(a=>a*a)
    let b=a.sort((a,b)=>a-b)
    return b
};