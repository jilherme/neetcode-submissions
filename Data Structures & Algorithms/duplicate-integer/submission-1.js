class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numCount = new Set()
        for (let num of nums) {
            if (numCount.has(num)) {
                return true
            } else {
                numCount.add(num)
            }
        }
        return false
    }
}
