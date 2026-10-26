class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();

        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1 )
        }

        // frequencyMap.entries() returns an iterable, ...iterates over the entries
        // we put all the entries (key/value[]) into another array
        
        const orderedFrequencyList = [...frequencyMap.entries()]
        .sort((a,b) => b[1] - a[1]) // sort childrens by the count value
        .map((item)=> item[0]) // leave only the keys after being sorted

        // return only the top K 
        return orderedFrequencyList.slice(0, k)
    }
}
