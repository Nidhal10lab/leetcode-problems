/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let a = s.split("");

    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
            return i;
        }
    }

    return -1;
};