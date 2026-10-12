/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let a=s.split("").filter(a => a >= "0" && a <= "9")
    let result = [...new Set(a)]
    let d=result.sort((a,b)=>b-a)
    let e=d[1]
    if(e===undefined){
        return -1
    }else{
    return Number(e)
    }
};