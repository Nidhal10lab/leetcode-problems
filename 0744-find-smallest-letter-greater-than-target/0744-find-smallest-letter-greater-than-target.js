/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
letters = ["c","f","j"]
 target = "a"
function nextGreatestLetter(letters, target) {
    let a=letters.sort()
    let b=a.filter(c=>c>target)
 
    let d=b[0]
    if(d==undefined){
        return a[0]
    }
    else
    {
        return d
    }
};