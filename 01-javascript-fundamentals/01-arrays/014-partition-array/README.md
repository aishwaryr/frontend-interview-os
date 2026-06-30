# Partition Array

## Problem Statement

Given an array and a predicate, return a new array where all items that satisfy the predicate come before all items that do not. Preserve relative order within both groups.

## Examples

- partitionArray([1, 2, 3, 4], n => n % 2 === 0) returns [2, 4, 1, 3]
- partitionArray(["a", "bb", "c"], s => s.length === 1) returns ["a", "c", "bb"]
- partitionArray([], predicate) returns []

## Constraints

- 0 <= array.length <= 100000
- Predicate returns a boolean-like value
- Do not mutate the input array

## Worked Example

### Observation 1

Each item belongs to one of two buckets: pass or fail.

### Observation 2

Stable order means you should append to buckets as you scan left to right.

### Key Insight

Stable partition is grouping into two arrays followed by concatenation.

### High-Level Algorithm

1. Create pass and fail arrays.
2. Scan the input from left to right.
3. Push each item into pass if the predicate is true, otherwise into fail.
4. Return pass followed by fail.

### Pseudocode

```text
pass = []
fail = []
for item of array
  if predicate(item): pass.push(item)
  else: fail.push(item)
return pass.concat(fail)
```

### Implementation Tips

- This version returns a new array because stable in-place partitioning is more complex.
- Call the predicate once per item.

## Mental Model

### Reusable Interview Pattern

Two-bucket stable partition.

### When To Recognize It

Look for partition, split by condition, passing first, failing later, or stable grouping into two categories.

### Similar Interview Questions

- Separate active and inactive users
- Move selected items to top
- Partition odd/even values

### Typical Data Structures Involved

- Two arrays
