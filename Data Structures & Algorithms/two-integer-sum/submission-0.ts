class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // value: index
        const seenNumbers = new Map<number, number>()

        for (let i=0; i<nums.length; i++) {
            let wantedNum = target - nums[i]
            if (seenNumbers.has(wantedNum)) {
                return ([seenNumbers.get(wantedNum)!, i])
            }
            seenNumbers.set(nums[i], i)
        }
        return []
    }
}
