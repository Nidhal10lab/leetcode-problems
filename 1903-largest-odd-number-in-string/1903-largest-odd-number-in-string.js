/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // if(num%2!==0){
    //     return num
    // }
    // else if(num%2===0){
    //     return ""
    // }else
    // {
    // let a=num.split("")
    // let b=a.filter((a)=>a%2!==0)
    // let c=b.filter((a,b)=>a>b)
    // let d=c.join("")
    // return d
    for(let i=num.length-1;i>=0;i--){
        if(Number(num[i])%2!==0){
            let b=num.slice(0,i+1)
            return b
        }}
        return ""
    
}