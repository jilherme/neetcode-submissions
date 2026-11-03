class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const uniqueChars = new Set()
        let left = 0;
        let longestSubstring = 0;

        for (let right =0; right<s.length; right++) {
            while (uniqueChars.has(s[right])) {
                uniqueChars.delete(s[left])
                left+=1
            }        
            uniqueChars.add(s[right])

            if (uniqueChars.size > longestSubstring) {
                longestSubstring = uniqueChars.size
            }
        }

        return longestSubstring
    }
}
