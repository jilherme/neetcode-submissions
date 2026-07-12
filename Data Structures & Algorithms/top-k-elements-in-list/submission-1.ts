    class Solution {
        /**
         * @param {number[]} nums
         * @param {number} k
         * @return {number[]}
         */
        topKFrequent(nums: number[], k: number): number[] {
            const freqMap = new Map()

            // for (const num of nums) {
            //     if (freqMap.has(num)) {
            //         freqMap.set(num, freqMap.get(num) + 1)
            //     } else {
            //         freqMap.set(num, 1)
            //     }
            // }

            for (const num of nums) {
                freqMap.set(num, (freqMap.get(num) || 0) + 1)
            }

            // Convert map to array of [num, frequency] pairs
            const freqArray = Array.from(freqMap.entries()); 

            // sort values descendent 
            freqArray.sort((a, b) => b[1] - a[1]);

            // return the index of k biggest nums
            return freqArray.slice(0,k).map(([num]) => num)
        }
    }
