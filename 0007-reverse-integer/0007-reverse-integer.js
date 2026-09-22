/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     let sign = x < 0 ? -1 : 1;
    let a=String(Math.abs(x))
    let b=a.split("").reverse().join("")
    let c=Number(b)
    c=sign*c
    if (c < -2147483648 || c > 2147483647) {
        return 0;
    }

    return c
};