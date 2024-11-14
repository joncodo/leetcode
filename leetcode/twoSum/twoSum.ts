export function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>(); // Map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement or the number who would match this number to the target
    if (numMap.has(complement)) {
      // Check if the complement exists in the map
      return [numMap.get(complement)!, i]; // Return indices if complement is found
    }
    numMap.set(nums[i], i); // Store the number and its index in the map
  }

  throw new Error("No solution found"); // Throw an error if no solution is found
}
