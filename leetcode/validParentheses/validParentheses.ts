export function isValid(s: string): boolean {
  const stack: string[] = []; // Initialize a stack to keep track of opening brackets
  const map: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  }; // Map closing brackets to their corresponding opening brackets

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char); // Push opening brackets onto the stack
    } else {
      // If the stack is empty or the top of the stack doesn't match the current closing bracket
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false; // The string is not valid
      }
      stack.pop(); // Pop the matching opening bracket from the stack
    }
  }

  return stack.length === 0; // If the stack is empty, all brackets were matched
}
