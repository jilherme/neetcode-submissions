class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const hashmapS = new Map<string, number>()
        const hashmapT = new Map<string, number>()

        if (s.length !== t.length) return false

        for (const char of s) {
            if (hashmapS.has(char)) {
                hashmapS.set(char, hashmapS.get(char) + 1)
            } else {
                hashmapS.set(char, 1)
            }
        }

        for (const charT of t) {
            if (hashmapS.get(charT)) {
                hashmapS.set(charT, hashmapS.get(charT) - 1)
            }
            else return false
        }

        return true
    }
}
