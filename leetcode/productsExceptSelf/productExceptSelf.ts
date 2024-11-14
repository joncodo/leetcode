export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // Left pass: Calculate the product of elements to the left of each index
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct; // Store the product of all elements to the left of index i
    leftProduct *= nums[i]; // Update leftProduct to include nums[i]
  }

  // Right pass: Multiply by the product of elements to the right of each index
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct; // Multiply with the product of all elements to the right of index i
    rightProduct *= nums[i]; // Update rightProduct to include nums[i]
  }

  // Normalize -0 values to 0 in the result array
  return result.map((val) => (Object.is(val, -0) ? 0 : val));
}
