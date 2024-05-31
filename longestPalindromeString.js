/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let palindrome =""
    let checkString =""

    //check intital string
    if(isPalindrome(s)){
        return s
    }

    for(let i=0;  i < s.length;i++){
         for(let j=s.length; j >i ; j--){
               checkString = s.slice(i,j)
               if(isPalindrome(checkString)&& palindrome.length < checkString.length ){
                   palindrome = checkString
               }
         }
      }

      return palindrome
};

function isPalindrome(checkString){
      
    for(let i=0;i < checkString.length/2;i++){
        if(checkString[i] != checkString[checkString.length-(i+1)]){
            return false
        }
    }

    return true
}
