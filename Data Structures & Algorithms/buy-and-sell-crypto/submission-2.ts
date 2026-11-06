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
            const currProfit = prices[i] - minPrice
            // verificar se é o menor preço
            if (prices[i] < minPrice) minPrice = prices[i]
            else if (currProfit > maxProfit) maxProfit = currProfit
        }

        return maxProfit
    }
}
