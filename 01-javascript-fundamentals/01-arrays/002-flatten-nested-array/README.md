# Flatten Nested Array

## Problem Statement

Given an array that may contain nested arrays at any depth, return a new one-dimensional array containing all non-array values in left-to-right order.

## Examples

- flattenNestedArray([1, [2, 3], [[4]], 5]) returns [1, 2, 3, 4, 5]
- flattenNestedArray([["a"], [], ["b", ["c"]]]) returns ["a", "b", "c"]
- flattenNestedArray([]) returns []

## Constraints

- 0 <= total nested elements <= 100000
- Nesting depth may be greater than one
- Values that are not arrays should be preserved as-is

## Worked Example

### Observation 1

Every item is either a final value or another list of work to process.

### Observation 2

The output order must match a depth-first left-to-right traversal.

### Key Insight

Flattening is traversal: use recursion to process nested arrays depth-first, and append values when they are not arrays.

### High-Level Algorithm

1. Create an empty result array.
2. Define a helper function that loops through each item in a given array.
3. If an item is an array, recursively call the helper on that item.
4. Otherwise append the item to the result.
5. Call the helper on the input array and return the result.

### Pseudocode

```text
result = []
function visit(items)
  for each item in items
    if item is array: visit(item)
    else: result.push(item)

visit(array)
return result
```

### Implementation Tips

- Keep result in outer scope so recursive calls append into the same output.
- Array.isArray is the correct test for arrays.

## Mental Model

### Reusable Interview Pattern

Depth-first traversal.

### When To Recognize It

Look for recursive data: arrays containing arrays, trees, comments with replies, or nested menus.

### Similar Interview Questions

- Flatten a tree
- Collect all leaf nodes
- Render nested comments

### Typical Data Structures Involved

- Stack or recursion
- Result array
