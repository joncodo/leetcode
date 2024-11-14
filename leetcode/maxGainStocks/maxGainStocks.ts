export function maxGainStocks(prices: number[]): number {
  let minPrice = Infinity; // Initialize minPrice to a very high value
  let maxProfit = 0; // Initialize maxProfit to zero

  for (let price of prices) {
    // Update minPrice if the current price is lower
    if (price < minPrice) {
      minPrice = price;
    }

    // Calculate potential profit with the current price
    const profit = price - minPrice;

    // Update maxProfit if the current profit is higher
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit; // Return the maximum profit found
}
