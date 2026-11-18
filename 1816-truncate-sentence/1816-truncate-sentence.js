/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function truncateSentence(s, k) {
   
   let b=s.split(" ")
    let a=b.slice(0,k)
    let c=a.join(" ")
    return c
};