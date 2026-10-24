class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedAnagramGroups = new Map();
        const output = []
        for (const word of strs) {
            const sortedWord = word.split("").sort().join("")

            // if has sorted Key, add to array.
            if (!sortedAnagramGroups.has(sortedWord)) {
                sortedAnagramGroups.set(sortedWord, [])
            }
            // get object/array reference, then push to array
            sortedAnagramGroups.get(sortedWord).push(word)
        }

        for (const [_,value] of sortedAnagramGroups) {
            output.push(value)
        }
        return output
    }

   
}
