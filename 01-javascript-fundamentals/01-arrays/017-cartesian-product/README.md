# Cartesian Product

## Problem Statement

Given an array of arrays, return every combination that picks exactly one value from each input array.

## Examples

- cartesianProduct([[1, 2], ["a", "b"]]) returns [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]
- cartesianProduct([[1], [2], [3]]) returns [[1, 2, 3]]
- cartesianProduct([]) returns [[]]

## Constraints

- 0 <= arrays.length <= 10
- Each inner array may be empty
- Output size may be the product of all inner lengths

## Worked Example

### Observation 1

Each input array contributes one position in every output tuple.

### Observation 2

Adding a new option array expands every existing partial tuple by each new value.

### Key Insight

Build combinations incrementally: start with one empty tuple, then append each choice dimension.

### High-Level Algorithm

1. Start with result containing one empty tuple.
2. For each options array, create a new list of combinations.
3. For every existing combination and every option, append a new combination with that option added.
4. Replace the result with the expanded list.
5. Return the final result.

### Pseudocode

```text
result = [[]]
for options of arrays
  next = []
  for combo of result
    for option of options
      next.push([...combo, option])
  result = next
return result
```

### Implementation Tips

- If any inner array is empty, the result becomes empty.
- The empty product is [[]], representing one combination with no choices.

## Mental Model

### Reusable Interview Pattern

Incremental combination building.

### When To Recognize It

Look for all combinations, every choice from each list, product of options, or variant generation.

### Similar Interview Questions

- Generate product SKUs
- Build test matrix cases
- Combine filters

### Typical Data Structures Involved

- Result list of partial tuples
- Nested loops
