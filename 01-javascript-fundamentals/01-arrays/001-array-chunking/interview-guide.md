# Interview Guide: Array Chunking

## Hints

### Hint 1

Think about where each chunk starts.

### Hint 2

Chunk starts are `0`, `size`, `2 * size`, and so on.

### Hint 3

An output array is enough; no lookup structure is needed.

### Hint 4

Loop by `size` and slice each window.

### Hint 5

Return `array.slice(i, i + size)` for every valid `i`.

## Complexity

### Time Complexity

The loop visits chunk boundaries, while `slice` copies each element once overall.

### Space Complexity

O(n) for the returned chunks because each element is copied into a chunk. Aside from the returned output, the loop uses O(1) working space.

### Tradeoffs

- Using `slice` is clear and non-mutating.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- What changes if chunks must be lazy rather than all allocated at once?
- How would you chunk an async stream?
- Can the function support a final padded chunk?
- What should happen for invalid chunk sizes?

## Variants

### Easier variation

Return only the number of chunks needed.

### Medium variation

Chunk an array and pad the final chunk to a fixed length.

### Hard variation

Implement a lazy generator version.

### Real interview variation

Batch a list of analytics events into request payloads.

## Common Mistakes

- Using `splice` and accidentally mutating the input.
- Forgetting that the last chunk may be shorter.
- Incrementing the index by `1` instead of by `size`.
- Returning a flat array instead of nested chunks.

## Quick Revision Notes

- Chunking is a boundary problem.
- Use `slice(start, start + size)` for non-mutating chunks.
- The final slice naturally handles short remainders.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
