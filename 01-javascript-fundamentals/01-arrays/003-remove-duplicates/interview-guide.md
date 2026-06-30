# Interview Guide: Remove Duplicates

## Hints

### Hint 1

The expensive part is asking whether a value appeared earlier.

### Hint 2

Scan left to right to preserve first occurrence.

### Hint 3

Use a `Set` for membership.

### Hint 4

Only push a value the first time you see it.

### Hint 5

Maintain both `seen` and `result`; the set answers lookup, the array stores order.

## Complexity

### Time Complexity

Each value is checked and inserted at most once.

### Space Complexity

O(u) for the `seen` set, where `u` is the number of unique values. The returned array also stores up to O(u) values.

### Tradeoffs

- `Set` is fast and simple for SameValueZero equality.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you remove duplicates by object property?
- How would you support deep equality?
- Can this be done in-place?
- What if the array is already sorted?

## Variants

### Easier variation

Remove adjacent duplicates from a sorted array.

### Medium variation

Remove duplicates by a key selector.

### Hard variation

Remove duplicates using deep structural equality.

### Real interview variation

Deduplicate API records by ID while keeping first-seen order.

## Common Mistakes

- Using `includes` inside a loop and making the solution O(n^2).
- Sorting and changing the required order.
- Confusing object identity with deep equality.
- Adding every value to the result before checking the set.

## Quick Revision Notes

- Use Set for seen membership.
- Scan left to right for first occurrence.
- Result array preserves order; Set does not define your output shape.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
