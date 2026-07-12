class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const wordsMap = new Map<string, string[]>()

        for (let i=0; i<strs.length; i++) {
            const currentWord = strs[i]
            const sortedWord = currentWord.split("").sort().join("")

            if (wordsMap.has(sortedWord)) {
                wordsMap.get(sortedWord).push(currentWord)
            } else {
                wordsMap.set(sortedWord, [currentWord])
            }
        }

        return [...wordsMap.values()]
    }
}
