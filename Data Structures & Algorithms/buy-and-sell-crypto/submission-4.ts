class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // salvar maxProfit
        let maxProfit = 0;
        let minPrice = prices[0];
        // iterar sobre os valores diarios
        for (let i =1; i<prices.length; i++) {
            // verificar se é o menor preço
            if (prices[i] < minPrice) minPrice = prices[i]
            else {
                const profit = prices[i] - minPrice;
                if (profit > maxProfit) maxProfit = profit
            }
        }

        return maxProfit
    }

}
