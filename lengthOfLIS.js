/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {

    let dp = []
    for(let i=0; i<nums.length;i++){
        dp.push(1)
    }

    for(let j=nums.length-1; j>=0;j--){
        for(let k=j+1;k<nums.length;k++){
            if(nums[j]<nums[k]){
                dp[j] = Math.max(dp[j], dp[k]+1)
            }
        }
    }
  )
    return Math.max(...dp)
}
