# Move Zeroes

## Problem Statement

Given an array of numbers, move all zeroes to the end in-place while preserving the relative order of non-zero values.

## Examples

- moveZeroes([0, 1, 0, 3, 12]) returns [1, 3, 12, 0, 0]
- moveZeroes([0, 0, 1]) returns [1, 0, 0]
- moveZeroes([]) returns []

## Constraints

- 0 <= nums.length <= 100000
- Values may be negative or positive
- Only numeric zero should be moved

## Worked Example

### Observation 1

Non-zero values must keep their original relative order.

### Observation 2

Once all non-zero values are compacted at the front, the remaining positions must be zero.

### Key Insight

Use a write pointer for the next non-zero position, then fill the tail with zeroes.

### High-Level Algorithm

1. Initialize write to zero.
2. Scan each value from left to right.
3. When the value is non-zero, write it at write and increment write.
4. After the scan, fill positions from write to the end with zero.
5. Return the array.

### Pseudocode

```text
write = 0
for read from 0 to n - 1
  if nums[read] is not zero
    nums[write] = nums[read]
    write++
while write < n
  nums[write] = 0
  write++
return nums
```

### Implementation Tips

- This stable compaction approach minimizes swaps.
- Use a strict zero check so other falsy values are not moved by accident.

## Mental Model

### Reusable Interview Pattern

Stable in-place compaction.

### When To Recognize It

Look for move all X to end, remove values in-place, preserve order, or compact array.

### Similar Interview Questions

- Remove element in-place
- Stable partition by predicate
- Compact null values

### Typical Data Structures Involved

- Read pointer
- Write pointer
