/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let even = nums.filter((num, i) => i % 2 === 0);
    let odd = nums.filter((num, i) => i % 2 !== 0);
    even.sort((a, b) => a - b);
    odd.sort((a, b) => b - a);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            result[i] = even.shift();
        } else {
            result[i] = odd.shift();
        }
    }

    return result;
};
