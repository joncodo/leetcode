import { trap } from "./trappingRainWater";

describe("trap", () => {
  test("returns the correct amount of water for a typical case with multiple dips", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test("returns the correct amount of water for multiple dips of varying heights", () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });

  test("returns correct amount of water when there is a deep dip in the middle", () => {
    expect(trap([3, 0, 2, 0, 4])).toBe(7);
  });

  test("returns correct amount of water when there are multiple valleys", () => {
    expect(trap([0, 2, 0, 1, 0, 3, 0, 1, 2, 1, 2, 1])).toBe(9);
  });

  test("returns the correct amount of water for a single valley", () => {
    expect(trap([2, 0, 2])).toBe(2);
  });

  test("returns correct amount of water for minimal input with no valleys", () => {
    expect(trap([1, 1, 1, 1])).toBe(0);
  });

  test("returns correct amount of water for increasing heights", () => {
    expect(trap([1, 2, 3, 4, 5])).toBe(0);
  });

  test("returns correct amount of water for decreasing heights", () => {
    expect(trap([5, 4, 3, 2, 1])).toBe(0);
  });

  test("returns 0 for a single bar", () => {
    expect(trap([1])).toBe(0);
  });

  test("handles large input with alternating peaks and valleys", () => {
    const largeArray = Array(1000)
      .fill(0)
      .map((_, i) => (i % 2 === 0 ? 2 : 0));
    expect(trap(largeArray)).toBe(998);
  });
});
