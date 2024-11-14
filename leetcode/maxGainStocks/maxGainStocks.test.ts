// maxGainStocks.test.ts
import { maxGainStocks } from "./maxGainStocks";

describe("maxGainStocks", () => {
  test("returns correct max profit for typical increasing and decreasing prices", () => {
    expect(maxGainStocks([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test("returns 0 when prices are continuously decreasing", () => {
    expect(maxGainStocks([7, 6, 4, 3, 1])).toBe(0);
  });

  test("returns correct max profit when profit is achieved at the end of the array", () => {
    expect(maxGainStocks([2, 4, 1, 5])).toBe(4);
  });

  test("returns 0 when only one price is given", () => {
    expect(maxGainStocks([5])).toBe(0);
  });

  test("returns correct max profit with large differences between prices", () => {
    expect(maxGainStocks([1, 1000, 0, 500])).toBe(999);
  });

  test("handles prices with multiple profitable opportunities, returning the max profit", () => {
    expect(maxGainStocks([3, 3, 5, 0, 0, 3, 1, 4])).toBe(4);
  });

  test("returns 0 for an array of constant prices", () => {
    expect(maxGainStocks([5, 5, 5, 5, 5])).toBe(0);
  });

  test("returns correct max profit for small arrays with potential profit", () => {
    expect(maxGainStocks([1, 6])).toBe(5);
  });

  test("returns 0 for a single-day price array", () => {
    expect(maxGainStocks([7])).toBe(0);
  });

  test("returns correct max profit when largest profit appears after a period of price fluctuation", () => {
    expect(maxGainStocks([9, 1, 7, 2, 8, 3, 10])).toBe(9);
  });
});
