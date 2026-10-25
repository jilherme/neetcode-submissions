class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramGroup = new Map();

        for (const word of strs) {
            const sortedWord = [...word].sort().join("")

            if (!anagramGroup.has(sortedWord)) {
                anagramGroup.set(sortedWord, [])
            }
            anagramGroup.get(sortedWord).push(word)
        }

        return [...anagramGroup.values()]
    }
}
