class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // const sortedS =s.split("").sort().join("")
        // const sortedT =t.split("").sort().join("")

        // if (sortedS === sortedT) return true
        // return false
        if (s.length !== t.length) return false
        const firstWordMap = new Map();
        for (const char of s) {
            // if (!firstWordMap.has(char)) {
            //     firstWordMap.set(char, 1)
            // } else {
            //     firstWordMap.set(char, firstWordMap.get(char) + 1)
            // }
            firstWordMap.set(char, (firstWordMap.get(char) || 0) + 1);
        }

        for (const char of t) {
            if (!firstWordMap.has(char) || firstWordMap.get(char)<=0) {
                return false
            } else {
                firstWordMap.set(char, firstWordMap.get(char)-1)
            }
        }

        return true

        
    }
}
