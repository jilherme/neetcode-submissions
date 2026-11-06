class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let minPrice = prices[0];

        for (let i = 1; i < prices.length; i++) {
            const profit = prices[i] - minPrice;
            // verificar se é o menor preço
            if (prices[i] < minPrice) minPrice = prices[i];
            else if (profit > maxProfit) maxProfit = profit;
        }

        return maxProfit;
    }
}
