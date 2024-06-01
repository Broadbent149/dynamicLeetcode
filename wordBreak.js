/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {

        let word = s.toString().split("")
        let wordFound = false

        if(checkString(s, wordDict)){
            return true
        }
        
        for(let i=1; i<word.length+1;i++){
            const newWord = word.slice(0,i).join("")
            wordFound = checkString(newWord, wordDict)
          
            if(wordFound && newWord === word.join("")){
                return true
            }else if(wordFound){
                    word = word.slice(i,word.length).join("")
                    return wordBreak(word, wordDict)
            }
        }
     
        return false
};

function checkString(substring, wordDict){
    for(let i=0; i<wordDict.length;i++){
        if(substring === wordDict[i]){
            return true
        }
    }

    return false
}
