/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function(n) {
    if(n===0){return 0}
    if(n <= 2){return 1}
     let sequence = [0,1,1]
     let i=3
     while(i<=n){
        sequence[i] = sequence[i-3] + sequence[i-2] + sequence[i-1]
        i+=1
     }
 return sequence[n]

};
