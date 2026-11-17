/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    for(let i=0;i<s.length;i+=2*k){
       let a = s.slice(i,i+k)
       let b=a.split("").reverse().join("")
       s = s.slice(0, i) + b + s.slice(i + k);
    }
    return s
};