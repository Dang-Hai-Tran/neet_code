function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }
    
    return maxProfit;
}


export { maxProfit };
