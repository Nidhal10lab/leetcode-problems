/**
 * @param {number[]} nums
 * @return {number}
 */
let nums=[12,345,2,6,7896]
function findNumbers(nums) {
    let a=nums.map(num=>String(num).length)
    let b=a.filter(num=>num%2==0)
    return b.length
    }


