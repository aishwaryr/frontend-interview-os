# Zip Two Arrays

## Problem Statement

Given two arrays, combine them into an array of pairs. Pair elements at the same index and stop when the shorter array ends.

## Examples

- zipTwoArrays([1, 2], ["a", "b"]) returns [[1, "a"], [2, "b"]]
- zipTwoArrays([1, 2, 3], ["a"]) returns [[1, "a"]]
- zipTwoArrays([], [1]) returns []

## Constraints

- 0 <= a.length, b.length <= 100000
- Values may be any JavaScript value
- Stop at the shorter length

## Worked Example

### Observation 1

A valid pair exists only while both arrays have a value at the current index.

### Observation 2

The number of pairs is the minimum of the two lengths.

### Key Insight

Zip is index alignment: loop from zero to the shorter length minus one and collect pairs.

### High-Level Algorithm

1. Compute the smaller length.
2. Create an empty result array.
3. Loop from zero up to that length.
4. Push [a[i], b[i]] for each index.
5. Return the result.

### Pseudocode

```text
length = min(a.length, b.length)
result = []
for i from 0 to length - 1
  result.push([a[i], b[i]])
return result
```

### Implementation Tips

- Do not read past the shorter array.
- Each pair should be a new two-element array.

## Mental Model

### Reusable Interview Pattern

Parallel index traversal.

### When To Recognize It

Look for zip, pair by index, combine aligned arrays, or column-wise grouping.

### Similar Interview Questions

- Pair labels with values
- Combine x and y coordinates
- Build rows from two columns

### Typical Data Structures Involved

- Index loop
- Result array of pairs
