/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr=Array.from({length:n},(_,i)=>i+1)
    let z=arr.map((a)=>{
        if(a%3===0&&a%5===0){
            return "FizzBuzz"
        }
        else if(a%3==0){
            return "Fizz"
        }
        else if(a%5==0){
            return "Buzz"
        }
        else{
            return a
        }
    })
    let str=z.map(b=>String(b))
    return str
};