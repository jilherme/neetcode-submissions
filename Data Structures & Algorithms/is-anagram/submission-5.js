class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sortedS =s.split("").sort().join("")
        console.log(sortedS)
        const sortedT =t.split("").sort().join("")
        console.log(sortedT)

        if (sortedS === sortedT) return true
        return false
    }
}
