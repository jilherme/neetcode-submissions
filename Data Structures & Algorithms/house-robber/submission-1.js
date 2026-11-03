class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // 2, 1, 1, 2
        // sumarr = []
        if (nums.length === 1) return nums[0]
        let prev2 = nums[0]
        let prev1 = Math.max(nums[1], nums[0])

        for (let i = 2; i<nums.length; i++) {
            console.log("iteracao", i)
            const sum = prev2 + nums[i]
            console.log("prev2", prev2)
            console.log("prev1", prev1)
            console.log("sum", sum)
            console.log("nums[i]", nums[i])
            if (sum > prev1) {
                prev2 = prev1
                prev1 = sum
            } else {
                prev2 = prev1
            }
        }
        return Math.max(prev1, prev2)
    }
}
