class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();
        const bucket = [];
        let remainingK = k;

        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        for (const entry of frequencyMap.entries()) {
            const entryCount = entry[1];
            if (!bucket[entryCount]) {
                bucket[entryCount] = [];
            }
            bucket[entryCount].push(entry[0]);
        }

        let output = [];
        console.log(bucket)
        for (let i = bucket.length - 1; remainingK > 0; i--) {
            if (!bucket[i]) continue
            for (const num of bucket[i]) {
                output.push(num);
                remainingK -= 1;
            }
        }
        

        return output;
    }
}
