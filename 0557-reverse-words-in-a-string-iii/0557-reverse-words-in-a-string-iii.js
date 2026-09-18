/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a=s.split(" ")
    let b=a.map(z=>z.split("").reverse().join(""))
    let c=b.join(" ")
    return c
};