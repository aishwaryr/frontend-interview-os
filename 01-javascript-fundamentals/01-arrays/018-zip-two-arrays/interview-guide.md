# Interview Guide: Zip Two Arrays

## Hints

### Hint 1

How many complete pairs can you make?

### Hint 2

The answer length cannot exceed the shorter input length.

### Hint 3

Use a simple index loop.

### Hint 4

At each index, create `[a[i], b[i]]`.

### Hint 5

Loop while `i < Math.min(a.length, b.length)`.

## Complexity

### Time Complexity

The loop runs once per produced pair.

### Space Complexity

O(min(n, m)) for the returned pairs. Working space outside the output is O(1).

### Tradeoffs

- Stopping at the shorter array is common and predictable.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you zip to the longer length with a default fill value?
- How would you zip more than two arrays?
- Can this be implemented lazily?
- How would you unzip the result?

## Variants

### Easier variation

Zip arrays of equal length.

### Medium variation

Zip and stop at the shorter array.

### Hard variation

Zip N arrays with configurable fill values.

### Real interview variation

Pair chart labels with data points.

## Common Mistakes

- Looping to the longer length and producing `undefined` accidentally.
- Mutating the input arrays with `shift`.
- Returning objects when pairs were requested.
- Reusing the same pair array for every result.

## Quick Revision Notes

- Zip aligns by index.
- Length is `min(a.length, b.length)`.
- Each output item is `[a[i], b[i]]`.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
