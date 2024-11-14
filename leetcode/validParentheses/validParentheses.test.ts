// isValid.test.ts
import { isValid } from "./validParentheses";

describe("isValid", () => {
  test("returns true for a simple balanced set of parentheses", () => {
    expect(isValid("()")).toBe(true);
  });

  test("returns true for a balanced string with multiple types of parentheses", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test("returns false for a string with mismatched parentheses", () => {
    expect(isValid("(]")).toBe(false);
  });

  test("returns false for a string with nested but incorrectly ordered parentheses", () => {
    expect(isValid("([)]")).toBe(false);
  });

  test("returns true for a string with nested and correctly ordered parentheses", () => {
    expect(isValid("{[]}")).toBe(true);
  });

  test("returns true for an empty string", () => {
    expect(isValid("")).toBe(true);
  });

  test("returns false for a string with only opening brackets", () => {
    expect(isValid("(((")).toBe(false);
  });

  test("returns false for a string with only closing brackets", () => {
    expect(isValid(")))")).toBe(false);
  });

  test("returns false for a string with unbalanced parentheses with extra opening bracket", () => {
    expect(isValid("(()")).toBe(false);
  });

  test("returns false for a string with unbalanced parentheses with extra closing bracket", () => {
    expect(isValid("())")).toBe(false);
  });

  test("returns true for a complex balanced set of parentheses", () => {
    expect(isValid("({[]})")).toBe(true);
  });

  test("handles a long balanced string efficiently", () => {
    const longBalancedString = "({[]})".repeat(1000); // Creates a long balanced string
    expect(isValid(longBalancedString)).toBe(true);
  });

  test("handles a long unbalanced string efficiently", () => {
    const longUnbalancedString = "({[]})".repeat(999) + "("; // Creates a long unbalanced string
    expect(isValid(longUnbalancedString)).toBe(false);
  });
});
