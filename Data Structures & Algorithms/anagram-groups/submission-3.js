class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedAnagramGroups = new Map();
        for (const word of strs) {
            const sortedWord = word.split("").sort().join("")

            // if has sorted Key, add to array.
            if (!sortedAnagramGroups.has(sortedWord)) {
                sortedAnagramGroups.set(sortedWord, [])
            }
            // get object/array reference, then push to array
            sortedAnagramGroups.get(sortedWord).push(word)
        }

        const output = []

        // for (const [_,value] of sortedAnagramGroups) {
        //     output.push(value)
        // }
        // return output
        console.log([...sortedAnagramGroups.values()])
        return [...sortedAnagramGroups.values()]
    }

   
}
