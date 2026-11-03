/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let z=word.split("").map((a)=>{
        if(a===a.toUpperCase()&&a!==a.toLowerCase()){
        return true
        }
        else{
            return false
        }})
        if(z.every(b=>b===true)){
        return true
        }
        else if(z.every(b=>b===false)){
        return true
        }
        else if(z[0] === true && z.slice(1).every(b => b === false)){
            return true
        }  
        else{
            return false
        }

};