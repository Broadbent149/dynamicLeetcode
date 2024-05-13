/**
*  Follows fibonacci - Space optimized approach
 * @param {number} n
 * @return {number}
 */

 
const climbStairs = function(n) {
    
    if (n === 1) {
        return 1;
    }
    
    let prev1 = 1;
    let prev2 = 1;
    
    for (let i = 2; i <= n; i++) {       
        const current = prev1 + prev2;
        //Calculates the previous count and carries it through
        prev1 = prev2;
        prev2 = current;
    }
    
    return prev2;
};
