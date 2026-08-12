/**
 * @param {number} x
 * @return {number}
 */
let x=4
function mySqrt(x) {
   for(let i=0;i<=x;i++){
    if(i*i===x){
    return i
   }
   else if(i*i>x){
    let c=i-1
     let b=Math.floor(c)
    return b
     }
}  
}
console.log(mySqrt(x))