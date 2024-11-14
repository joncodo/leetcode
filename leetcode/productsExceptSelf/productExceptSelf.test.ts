// productExceptSelf.test.ts
import { productExceptSelf } from "./productExceptSelf";

describe("productExceptSelf", () => {
  test("returns correct product array for positive integers", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });

  test("returns correct product array when there are zeros in the array", () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toStrictEqual([0, 0, 9, 0, 0]);
  });

  test("returns an array of 1s when the input array has only one non-zero element", () => {
    expect(productExceptSelf([1, 0, 0, 0])).toStrictEqual([0, 0, 0, 0]);
  });

  test("returns correct product array for all negative numbers", () => {
    expect(productExceptSelf([-1, -2, -3, -4])).toStrictEqual([
      -24, -12, -8, -6,
    ]);
  });

  test("returns correct product array when all elements are the same", () => {
    expect(productExceptSelf([2, 2, 2, 2])).toStrictEqual([8, 8, 8, 8]);
  });

  test("handles an array with two elements", () => {
    expect(productExceptSelf([5, 10])).toStrictEqual([10, 5]);
  });

  test("returns correct product array for larger input sizes", () => {
    const largeArray = Array(1000).fill(1); // Array of 1000 ones
    expect(productExceptSelf(largeArray)).toStrictEqual(Array(1000).fill(1));
  });

  test("returns correct product array for mixed positive and negative integers", () => {
    expect(productExceptSelf([-1, 2, -3, 4])).toStrictEqual([-24, 12, -8, 6]);
  });
});
