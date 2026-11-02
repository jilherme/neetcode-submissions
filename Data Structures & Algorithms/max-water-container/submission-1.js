class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maximumAmountWater = 0;
        while (left < right) {
            
            const barsDelta = right - left;
            const maxHeightBetweenBars = Math.min(heights[right], heights[left]);
            const waterAmount = barsDelta * maxHeightBetweenBars;

            if (waterAmount > maximumAmountWater) {
                maximumAmountWater = waterAmount;
            }

            if (heights[left] > heights[right]) {
                right -=1;
            }  else {
                left +=1;
            }
        }

        return maximumAmountWater;
    }
}
