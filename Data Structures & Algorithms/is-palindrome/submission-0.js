class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            const leftChar = s[left].toLowerCase();
            const rightChar = s[right].toLowerCase();
            if (!this.isAlphanumeric(leftChar)) {
                left += 1;
                continue;
            }
            if (!this.isAlphanumeric(rightChar)) {
                right -= 1;
                continue;
            }

            if (leftChar.toLowerCase() != rightChar.toLowerCase()) {
                return false;
            }
            left +=1
            right -=1
        }

        return true;
    }

    isAlphanumeric(char) {
        return char.match(/^[0-9a-z]+$/);
    }
}
