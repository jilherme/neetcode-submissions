class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0]
        let profit = 0

        for (const stockPrice of prices) {
            const curProfit = stockPrice - minPrice
            if (curProfit > profit) profit = curProfit
            else if (stockPrice < minPrice) minPrice = stockPrice
        }

        return profit
    }
}
