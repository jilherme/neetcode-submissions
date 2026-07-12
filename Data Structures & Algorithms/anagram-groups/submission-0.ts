class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        
        for (let left=0; left < strs.length; left++) {
            const currentWord = strs[left];
            const sortedWord = currentWord.split("").sort().join("");
            
            if (map.has(sortedWord)) {
                map.get(sortedWord)!.push(currentWord);
            } else {
                map.set(sortedWord, [currentWord]);
            }
        }

        return Array.from(map.values());
    }
}
