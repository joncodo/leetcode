// longestConsecutiveSequence.test.ts
import { longestConsecutiveSequence } from "./longestConsecutiveSequence";

describe("longestConsecutive", () => {
  test("returns the correct length for a typical case with a sequence", () => {
    expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  test("returns the correct length when the array contains all consecutive elements", () => {
    expect(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  test("returns 1 for an array with one element", () => {
    expect(longestConsecutiveSequence([5])).toBe(1);
  });

  test("returns 0 for an empty array", () => {
    expect(longestConsecutiveSequence([])).toBe(0);
  });

  test("returns the correct length when there are multiple separate sequences", () => {
    expect(longestConsecutiveSequence([10, 5, 6, 8, 7, 15, 16])).toBe(4); // Longest sequence is [5, 6, 7, 8]
  });

  test("handles negative numbers correctly", () => {
    expect(longestConsecutiveSequence([-1, -2, -3, -4, 0, 1])).toBe(6); // Longest sequence is [-4, -3, -2, -1, 0, 1]
  });

  test("returns the correct length when all elements are the same", () => {
    expect(longestConsecutiveSequence([1, 1, 1, 1])).toBe(1);
  });

  test("returns the correct length when there are gaps in sequences", () => {
    expect(longestConsecutiveSequence([1, 9, 3, 10, 4, 20, 2])).toBe(4); // Longest sequence is [1, 2, 3, 4]
  });

  test("handles a large range of numbers", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
    expect(longestConsecutiveSequence(largeArray)).toBe(1000); // Longest sequence is the whole array
  });

  test("handles unsorted input with random order", () => {
    expect(longestConsecutiveSequence([5, 2, 99, 3, 4, 1, 100])).toBe(5); // Longest sequence is [1, 2, 3, 4, 5]
  });
});
