class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // value: index
        const numsPosition = new Map();
        for (let i = 0; i < nums.length; i++) {
            const currentPair = target - nums[i]
            if (numsPosition.has(currentPair)) {
                return [numsPosition.get(currentPair), i]
            } else {
                numsPosition.set(nums[i], i)
            }
        }
    }
}
