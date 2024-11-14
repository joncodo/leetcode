# Problem: Trapping Rain Water

## Description: 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. You need to calculate the trapped water efficiently without a brute-force O(n^2) approach.

## Example 1

```

Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
Explanation:
The elevation map can trap water at the following positions:
- Position 2: Traps 1 unit of water (bounded by heights 1 and 2).
- Position 5: Traps 1 unit of water (bounded by heights 2 and 3).
- Position 6: Traps 2 units of water (bounded by heights 2 and 3).
- Position 9: Traps 1 unit of water (bounded by heights 2 and 2).
- Position 10: Traps 1 unit of water (bounded by heights 3 and 2).

Total trapped water = 1 + 1 + 2 + 1 + 1 = 6 units.

```

## Example 2

```
Input: height = [4, 2, 0, 3, 2, 5]
Output: 9
Explanation:
The elevation map can trap water at the following positions:
- Position 1: Traps 2 units of water (bounded by heights 4 and 3).
- Position 2: Traps 4 units of water (bounded by heights 4 and 3).
- Position 4: Traps 3 units of water (bounded by heights 3 and 5).

Total trapped water = 2 + 4 + 3 = 9 units.
```

Constraints
n == height.length
1 <= n <= 2 * 10^4
0 <= height[i] <= 10^5

