/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let result = [
        ...nums.filter(num => num !== 0),
        ...nums.filter(num => num === 0)
    ];

    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};