/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let a=s.split("")
    let b=t.split("")
    let c=a.concat(b)
   let d = c.filter(
        num => c.filter(n => n === num).length % 2 !== 0
    );

    return d[0];
};