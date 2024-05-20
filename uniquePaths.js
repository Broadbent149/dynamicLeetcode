/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    const array=[]
    for(let i=0;i<m;i++){
        array[i] =[]
        for(let j=0;j<n;j++){         
            if(i===0 || j===0){
                array[i][j] =1;
            }else{
                array[i][j] =-1;
            }
       
        
        }
    }
      for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            array[i][j] = array[i-1][j] +array[i][j-1]
        }
       }
       return array[m-1][n-1]
};
