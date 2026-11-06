/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let obj={}
    let a=paragraph.toLowerCase()
    let b=a.split(/[^a-z]+/)
    for(let word of b){
     if (word !== "" && !banned.includes(word)) {
        obj[word]=(obj[word]||0)+1
        }
    }
    let max=0
    let result=""
    for(let word in obj){
        if(obj[word]>max){
            max=obj[word]
            result=word
        }
    }
    return result
};