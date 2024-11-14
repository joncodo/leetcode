export function longestConsecutiveSequence(nums: number[]): number {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of nums) {
    // Check if num is the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // Increment to find the length of the sequence
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentLength += 1;
      }

      // Update the maxLength if current sequence is longer
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}
