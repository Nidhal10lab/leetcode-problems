/**
 * @param {number[]} nums
 * @return {number[]}
 */
let a=[1,2,1]
function getConcatenation(nums) {
    let c=nums.concat(nums)
    return c;
};
console.log(getConcatenation(a))