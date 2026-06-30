# Array Difference

## Problem Statement

Given two arrays, return the unique values that appear in the first array but not in the second array. Preserve their first-appearance order from the first array.

## Examples

- arrayDifference([1, 2, 2, 3], [2]) returns [1, 3]
- arrayDifference(["a", "b", "a"], ["c"]) returns ["a", "b"]
- arrayDifference([], [1]) returns []

## Constraints

- 0 <= a.length, b.length <= 100000
- Values use JavaScript Set equality
- Result should contain no duplicates

## Worked Example

### Observation 1

For each value in the first array, you need to know whether the second array excludes it.

### Observation 2

Duplicates in the first array should not create duplicate output.

### Key Insight

Difference is a membership filter: build an exclusion set, then keep first-seen values not excluded.

### High-Level Algorithm

1. Build a set from the second array.
2. Create an emitted set and result array.
3. Scan the first array from left to right.
4. If a value is not excluded and not emitted, append it.
5. Return the result.

### Pseudocode

```text
excluded = new Set(b)
emitted = new Set()
result = []
for value of a
  if excluded does not have value and emitted does not have value
    emitted.add(value)
    result.push(value)
return result
```

### Implementation Tips

- This is not symmetric difference; only values from the first array are candidates.
- Keep a separate emitted set for uniqueness.

## Mental Model

### Reusable Interview Pattern

Exclusion set filter.

### When To Recognize It

Look for remove all from B, subtract arrays, missing from other list, or blacklist filtering.

### Similar Interview Questions

- Remove selected IDs
- Find deleted records
- Filter blocked words

### Typical Data Structures Involved

- Set for excluded values
- Set for emitted values
- Result array
