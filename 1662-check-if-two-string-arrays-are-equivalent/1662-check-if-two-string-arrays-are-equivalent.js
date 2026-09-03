/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 word1 = ["a", "cb"], word2 = ["ab", "c"]
function arrayStringsAreEqual (word1, word2) {
    let a=word1.reduce((a,b)=>a+b)
    let b=word2.reduce((a,b)=>a+b)
    if(a==b){
        return true
    }
    else
    {
        return false
    }
};