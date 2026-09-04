/**
 * @param {number[]} nums
 * @return {boolean}
 */
 nums = [1,2,3,1]
function  containsDuplicate(nums) {
    let a=new Set(nums)
    if(a.size==nums.length){
        return false
    }
    else
    {
        return true
    }
};