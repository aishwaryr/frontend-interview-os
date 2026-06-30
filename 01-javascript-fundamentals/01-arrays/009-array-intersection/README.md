# Array Intersection

## Problem Statement

Given two arrays, return the unique values that appear in both arrays. Preserve the order of their first appearance in the first array.

## Examples

- arrayIntersection([1, 2, 2, 3], [2, 3, 4]) returns [2, 3]
- arrayIntersection(["b", "a", "b"], ["a", "b"]) returns ["b", "a"]
- arrayIntersection([], [1]) returns []

## Constraints

- 0 <= a.length, b.length <= 100000
- Values use JavaScript Set equality
- Result should contain no duplicates

## Worked Example

### Observation 1

Membership in the second array is the key repeated question.

### Observation 2

The result should not repeat a value already emitted.

### Key Insight

Use one set for fast membership in the second array and another set to prevent duplicate output.

### High-Level Algorithm

1. Build a set from the second array.
2. Create an empty set for emitted values and an empty result.
3. Scan the first array from left to right.
4. If a value is in the second array and not emitted yet, append it and mark it emitted.
5. Return the result.

### Pseudocode

```text
valuesInB = new Set(b)
emitted = new Set()
result = []
for value of a
  if valuesInB has value and emitted does not
    emitted.add(value)
    result.push(value)
return result
```

### Implementation Tips

- Scan the first array to preserve its order.
- Use two sets because membership and output uniqueness are separate concerns.

## Mental Model

### Reusable Interview Pattern

Set membership filter.

### When To Recognize It

Look for common values, shared IDs, overlap, intersection, or exists in both.

### Similar Interview Questions

- Common tags between posts
- Users in both cohorts
- Shared selected IDs

### Typical Data Structures Involved

- Set for lookup
- Set for emitted values
- Result array
