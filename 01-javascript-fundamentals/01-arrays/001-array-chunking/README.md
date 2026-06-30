# Array Chunking

## Problem Statement

Given an array and a positive chunk size, split the array into smaller arrays where each chunk has at most size items. Preserve the original order.

## Examples

- chunkArray([1, 2, 3, 4, 5], 2) returns [[1, 2], [3, 4], [5]]
- chunkArray(["a", "b", "c"], 3) returns [["a", "b", "c"]]
- chunkArray([], 2) returns []

## Constraints

- 0 <= array.length <= 100000
- size is a positive integer
- Elements may be any JavaScript value

## Worked Example

### Observation 1

Each output chunk is a contiguous slice of the original array.

### Observation 2

The starting index of each chunk advances by exactly the chunk size.

### Key Insight

You do not need to track individual elements manually if you can take slices at regular boundaries.

### High-Level Algorithm

1. Create an empty result array.
2. Walk the input array by increments of size.
3. For each start index, slice from start to start + size.
4. Push that slice into the result.
5. Return the result.

### Pseudocode

```text
result = []
for start from 0 to array.length step size
  result.push(array.slice(start, start + size))
return result
```

### Implementation Tips

- Use slice, not splice, so the original array stays unchanged.
- The last chunk is allowed to be shorter than size.

## Mental Model

### Reusable Interview Pattern

Fixed-window traversal.

### When To Recognize It

Look for phrasing like split, batch, page, chunk, or group every N items.

### Similar Interview Questions

- Paginate API results
- Batch DOM updates
- Split a string into fixed-size blocks

### Typical Data Structures Involved

- Array for the result
- Loop index for chunk boundaries
