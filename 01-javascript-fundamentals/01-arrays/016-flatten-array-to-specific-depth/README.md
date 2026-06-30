# Flatten Array to Specific Depth

## Problem Statement

Given a nested array and a non-negative depth, return a new array flattened up to that depth.

## Examples

- flattenArrayToDepth([1, [2, [3]]], 1) returns [1, 2, [3]]
- flattenArrayToDepth([1, [2, [3]]], 2) returns [1, 2, 3]
- flattenArrayToDepth([1, [2]], 0) returns [1, [2]]

## Constraints

- 0 <= total nested elements <= 100000
- 0 <= depth <= 1000
- Do not mutate the input arrays

## Worked Example

### Observation 1

Depth controls whether a nested array should be expanded now or kept as a value.

### Observation 2

Each recursive step consumes one level of allowed flattening.

### Key Insight

Carry the remaining depth with each item; expand arrays only while remaining depth is greater than zero.

### High-Level Algorithm

1. Define a helper that accepts an item list and remaining depth.
2. For each item, if it is an array and remaining depth is positive, append the helper result for that item with depth minus one.
3. Otherwise append the item itself.
4. Return the built array.

### Pseudocode

```text
flatten(list, depth):
  result = []
  for item of list
    if item is array and depth > 0
      result.push(...flatten(item, depth - 1))
    else result.push(item)
  return result
```

### Implementation Tips

- Depth zero means make only a shallow copy of the top-level array.
- Use Array.isArray, not typeof.

## Mental Model

### Reusable Interview Pattern

Depth-limited traversal.

### When To Recognize It

Look for flatten to depth, limited recursion, expand N levels, or nested data with a stopping depth.

### Similar Interview Questions

- Render comments to max depth
- Traverse tree to level K
- Flatten menu items one level

### Typical Data Structures Involved

- Recursion with remaining depth
- Result array
