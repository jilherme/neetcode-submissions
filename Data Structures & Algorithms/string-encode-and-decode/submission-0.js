class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let outputStr= ''
        for (const str of strs) {
            // 5#Hello5#World
            outputStr += str.length + '#' + str
        }

        return outputStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // if (str[0] === 0) return [""]
        let words = []
        let i = 0
        let charCount = ""

        while (i < str.length) {
            const isNumber = str[i] !== "#"
            if (isNumber) {
                charCount +=str[i]
                i++ // continue next iteration
            }
            //just to be more readable
            if (str[i] === "#") {
                const wordLength = Number(charCount)
                console.log(wordLength)
                const word = str.slice(i+1, i+wordLength+1)
                console.log(word)
                words.push(word)

                //move pointer to next number
                i += wordLength+1
                // resets counter
                charCount = ""
            }

        }

        return words
    }
}
