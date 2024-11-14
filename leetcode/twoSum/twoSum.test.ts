// twoSum.test.ts
import { twoSum } from "./twoSum";

describe("twoSum", () => {
  test("returns indices of the two numbers that add up to the target - basic case", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("handles negative numbers", () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  test("handles multiple pairs, returning the first valid pair", () => {
    expect(twoSum([1, 2, 3, 4, 5], 6)).toEqual([1, 3]);
  });

  test("works with repeated numbers", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("returns the only solution when it exists", () => {
    expect(twoSum([1, 7, 11, 15], 18)).toEqual([1, 2]);
  });

  test("returns indices of numbers at the end of the array", () => {
    expect(twoSum([1, 2, 3, 6], 9)).toEqual([2, 3]);
  });

  test("works with large numbers", () => {
    expect(twoSum([1000000000, 500000000, 1500000000], 2000000000)).toEqual([
      1, 2,
    ]);
  });

  test("throws an error when no solution exists", () => {
    expect(() => twoSum([1, 2, 3], 10)).toThrow("No solution found");
  });

  test("handles an array with only two elements that add up to target", () => {
    expect(twoSum([5, 5], 10)).toEqual([0, 1]);
  });

  test("works with an array of larger size with only one valid solution", () => {
    expect(twoSum([3, 1, 4, 2, 8, 5, 7], 15)).toEqual([4, 6]);
  });
});
