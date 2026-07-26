/**
 * @param {string} s
 * @return {number}
 */
let a="Hello World"
function lengthOfLastWord(s) {
    let b=s.trim().split(" ");
    let c=b.pop()
    let d=c.length
    return d;
}
console.log(lengthOfLastWord(a))

