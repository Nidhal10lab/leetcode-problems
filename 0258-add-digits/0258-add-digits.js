/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
     while(num>=10){
    let a=String(num)
    let b=a.split("")
    let c=b.reduce((a,b)=>a+Number(b),0)
    num=c
    }
    return num
   
    
};