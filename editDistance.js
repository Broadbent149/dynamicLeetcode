/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function(word1, word2) {
    if(word1 === word2){ return 0}
    if(word2===""){return word1.length}
    if(word1===""){return word2.length}

    const col = word1.length
    const row = word2.length
    let dpArray = setupArray(col+1, row+1);
    //checks to make in the dp array
    //insert = (i, j+1)
    //delete = (i+1, j)
    //replace = (i+1, j+1)
    const word1Array = word1.split("").reverse()
    const word2Array = word2.split("").reverse()
    for (let i = row-1; i >=0; i--) {
        for (let j = col-1; j >=0 ; j--) {
            let minValue = Math.min(dpArray[i][j+1], dpArray[i+1][j], dpArray[i+1][j+1])
          
            const word1ArrayPosition = dpArray[row][j+1]
            const word2ArrayPosition = dpArray[i+1][col]

            if(word1Array[word1ArrayPosition] === word2Array[word2ArrayPosition]){
                dpArray[i][j] =minValue
            }else{
                 dpArray[i][j] =minValue+1
            }
           
        }
    }
    return dpArray[0][0]
}


function setupArray(colLength, rowLength){
    //bottom up approach
    let dpArray = [];

    for (let i = 0; i <rowLength; i++) {
        dpArray[i] = [];
        for (let j = 0; j <colLength ; j++) {
            if(i === rowLength-1){
                dpArray[i][j] = (colLength-1)-j
            }else if(j===colLength-1){
                dpArray[i][j] = (rowLength-1)-i
            }else{
                dpArray[i][j] = -1
            }
        }
    }

    return dpArray
}
