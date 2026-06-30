# Merge Two Sorted Arrays

## Problem Statement

Given two sorted arrays of numbers in ascending order, merge them into one sorted array.

## Examples

- mergeTwoSortedArrays([1, 3, 5], [2, 4]) returns [1, 2, 3, 4, 5]
- mergeTwoSortedArrays([], [1, 2]) returns [1, 2]
- mergeTwoSortedArrays([1, 1], [1]) returns [1, 1, 1]

## Constraints

- 0 <= a.length, b.length <= 100000
- Both inputs are already sorted ascending
- Do not mutate the input arrays

## Worked Example

### Observation 1

The smallest remaining value is always at the front of one of the two arrays.

### Observation 2

Once one array is exhausted, the rest of the other array is already sorted.

### Key Insight

Use two pointers to repeatedly choose the smaller current value.

### High-Level Algorithm

1. Initialize two pointers at zero.
2. Create an empty result array.
3. While both pointers are in range, append the smaller current value and advance that pointer.
4. Append any remaining values from the first array.
5. Append any remaining values from the second array and return the result.

### Pseudocode

```text
i = 0, j = 0, result = []
while i < a.length and j < b.length
  if a[i] <= b[j]: push a[i++]
  else: push b[j++]
append remaining a
append remaining b
return result
```

### Implementation Tips

- Use <= to keep equal values from the first array before equal values from the second.
- Avoid sorting the concatenated result; that discards the advantage of sorted inputs.

## Mental Model

### Reusable Interview Pattern

Two-pointer merge.

### When To Recognize It

Look for two sorted arrays/lists, merge, union-like traversal, or compare current heads.

### Similar Interview Questions

- Merge step in merge sort
- Merge sorted linked lists
- Combine sorted event streams

### Typical Data Structures Involved

- Two indices
- Result array
