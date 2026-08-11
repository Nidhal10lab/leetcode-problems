/**
 * @param {number[]} digits
 * @return {number[]}
 */
let a=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
function plusOne(digits) {
    let b=digits.join("")
    let e=BigInt(b)
    let c=(e+1n)
    let f=String(c)
    let d=f.split("").map(a=>Number(a))
    return d
}
console.log(plusOne(a))