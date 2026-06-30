# Remove Duplicates

## Problem Statement

Given an array, return a new array with duplicate values removed. Keep the first occurrence of each value and preserve relative order.

## Examples

- removeDuplicates([1, 2, 1, 3, 2]) returns [1, 2, 3]
- removeDuplicates(["a", "a", "b"]) returns ["a", "b"]
- removeDuplicates([]) returns []

## Constraints

- 0 <= array.length <= 100000
- Values may be primitives or object references
- Equality follows JavaScript Set semantics

## Worked Example

### Observation 1

To decide whether to keep an item, you only need to know if it has appeared before.

### Observation 2

Preserving first occurrence means you should scan from left to right.

### Key Insight

A Set gives constant-time membership checks while a result array preserves output order.

### High-Level Algorithm

1. Create an empty Set called seen.
2. Create an empty result array.
3. For each value, check whether it is in seen.
4. If not, add it to seen and append it to the result.
5. Return the result.

### Pseudocode

```text
seen = new Set()
result = []
for value of array
  if seen does not contain value
    seen.add(value)
    result.push(value)
return result
```

### Implementation Tips

- Do not sort unless the prompt says order does not matter.
- Set treats object references by identity, not deep equality.

## Mental Model

### Reusable Interview Pattern

Seen-set filtering.

### When To Recognize It

Look for unique, duplicate, first occurrence, already seen, or membership language.

### Similar Interview Questions

- First unique character
- Remove duplicate emails
- Detect repeated IDs

### Typical Data Structures Involved

- Set
- Result array
