/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let z=String(x)
    let a=z.split("")
    let b=a.reverse()
    let c=b.join("")
    if(c===z){
        return true
    }
    else
    {
        return false
    }
};