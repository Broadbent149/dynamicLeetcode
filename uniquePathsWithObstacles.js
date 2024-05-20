/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
    for(let i=0;i<obstacleGrid.length;i++){
        for(let j=0;j<obstacleGrid[i].length;j++){
            if(obstacleGrid[i][j] ===1){
                obstacleGrid[i][j] = 0
            }else{
                if(i===0 || j===0){
                    obstacleGrid[i][j] =1  
                }else{
                     obstacleGrid[i][j] =-1  
                }
            }
        }
    }

    for(let i=1;i<obstacleGrid.length;i++){
        for(let j=1;j<obstacleGrid[i].length;j++){
            if(obstacleGrid[i][j]!==0){
                obstacleGrid[i][j] = obstacleGrid[i-1][j] +obstacleGrid[i][j-1]
            }
        }
    }
    
    return obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1]
};
