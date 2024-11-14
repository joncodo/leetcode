export function trap(height: number[]): number {
  // Initialize two pointers for the left and right ends of the array
  let left = 0;
  let right = height.length - 1;

  // Variables to store the maximum height encountered from the left and right
  let leftMax = 0;
  let rightMax = 0;

  // Variable to accumulate the total water trapped
  let waterTrapped = 0;

  // Loop until the two pointers meet
  while (left <= right) {
    // If the height at the left pointer is less than the height at the right pointer
    if (height[left] < height[right]) {
      // Check if the current left height is greater than or equal to the leftMax
      if (height[left] >= leftMax) {
        // Update leftMax to the current left height
        leftMax = height[left];
      } else {
        // Calculate trapped water at the current left position
        waterTrapped += leftMax - height[left];
      }
      // Move the left pointer to the right
      left++;
    } else {
      // If the height at the right pointer is less than or equal to the height at the left pointer
      // Check if the current right height is greater than or equal to the rightMax
      if (height[right] >= rightMax) {
        // Update rightMax to the current right height
        rightMax = height[right];
      } else {
        // Calculate trapped water at the current right position
        waterTrapped += rightMax - height[right];
      }
      // Move the right pointer to the left
      right--;
    }
  }

  // Return the total amount of water trapped
  return waterTrapped;
}
