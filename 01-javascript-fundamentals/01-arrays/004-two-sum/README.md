# Two Sum

## Problem Statement

Given an array of numbers and a target number, return the indices of two distinct elements whose values add up to the target. If no pair exists, return null.

## Examples

- twoSum([2, 7, 11, 15], 9) returns [0, 1]
- twoSum([3, 2, 4], 6) returns [1, 2]
- twoSum([1, 2, 3], 10) returns null

## Constraints

- 0 <= nums.length <= 100000
- Numbers may be negative, zero, or positive
- The same index cannot be used twice

## Worked Example

### Observation 1

For each number, the only value that can complete the pair is target - number.

### Observation 2

You need the index of a previously seen complement, not just whether it exists.

### Key Insight

Store previously seen numbers in a map from value to index, then check each new number against its complement.

### High-Level Algorithm

1. Create an empty map from number to index.
2. Walk the array from left to right.
3. For each number, compute its complement.
4. If the complement is already in the map, return the stored index and current index.
5. Otherwise store the current number and index. Return null if the loop ends.

### Pseudocode

```text
seen = new Map()
for i from 0 to nums.length - 1
  complement = target - nums[i]
  if seen has complement: return [seen.get(complement), i]
  seen.set(nums[i], i)
return null
```

### Implementation Tips

- Check the complement before storing the current number so you do not reuse the same index.
- A Map handles negative numbers and zero naturally.

## Mental Model

### Reusable Interview Pattern

Complement lookup.

### When To Recognize It

Look for pair, sum, target, difference, or two values satisfying an equation.

### Similar Interview Questions

- Pair with target difference
- Three sum as an extension
- Find two transactions that balance

### Typical Data Structures Involved

- Map from value to index
