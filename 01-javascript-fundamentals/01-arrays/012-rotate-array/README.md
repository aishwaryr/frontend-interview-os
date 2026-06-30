# Rotate Array

## Problem Statement

Given an array, rotate it to the right by k steps in-place and return the same array.

## Examples

- For [1, 2, 3, 4, 5] and k = 2, the array becomes [4, 5, 1, 2, 3]
- rotateArray([1, 2], 3) returns [2, 1]
- rotateArray([], 4) returns []

## Constraints

- 0 <= nums.length <= 100000
- 0 <= k <= 1000000000
- Rotate to the right

## Worked Example

### Observation 1

Rotating by the array length returns the original order.

### Observation 2

The final array consists of the last k items followed by the earlier items.

### Key Insight

The three-reversal trick moves segments in-place without allocating another array.

### High-Level Algorithm

1. If the array is empty, return it.
2. Normalize k with k modulo the array length.
3. Reverse the whole array.
4. Reverse the first k items.
5. Reverse the remaining items and return the array.

### Pseudocode

```text
k = k % nums.length
reverse(nums, 0, n - 1)
reverse(nums, 0, k - 1)
reverse(nums, k, n - 1)
return nums
```

### Implementation Tips

- Normalize k before using it.
- A small reverse helper keeps the solution readable.

## Mental Model

### Reusable Interview Pattern

In-place reversal.

### When To Recognize It

Look for rotate array/string, shift by k, cyclic movement, or O(1) extra space rotation.

### Similar Interview Questions

- Rotate string
- Reverse words in place
- Rotate matrix layers

### Typical Data Structures Involved

- Two-pointer reverse helper
