/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let a=nums1.slice(0,m)
    let b=nums2.slice(0,n)
    let c=a.concat(b)
    let d=c.sort((a,b)=>a-b)
    let e=nums1.splice(0, nums1.length, ...d);
    return e
};