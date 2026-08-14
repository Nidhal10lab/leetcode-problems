/**
 * @param {number} n
 * @return {number}
 */
function subtractProductAndSum(n) {    
    let a=String(n)
    let b=a.split("")
    let c=b.reduce((a,b)=>Number(a)*Number(b),1)
    let d=b.reduce((a,b)=>Number(a)+Number(b),0)
    let e=c-d
    return e
};