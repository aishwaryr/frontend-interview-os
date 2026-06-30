# Interview Guide: Array Difference

## Hints

### Hint 1

Only values from the first array can appear in the answer.

### Hint 2

The second array is best used as fast lookup.

### Hint 3

Use a `Set` for excluded values.

### Hint 4

Track values already returned if the result must be unique.

### Hint 5

Keep `value` when `!excluded.has(value)` and it has not been emitted.

## Complexity

### Time Complexity

Build one set from `b`, then scan `a` once.

### Space Complexity

O(m) for the exclusion set built from the second array, plus O(r) for emitted tracking and result values.

### Tradeoffs

- Set lookup gives linear time.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would the answer change for symmetric difference?
- What if duplicates should be preserved?
- What if both arrays are sorted?
- How would you diff arrays of objects by ID?

## Variants

### Easier variation

Return values from `a` not in `b`, preserving duplicates.

### Medium variation

Return unique difference.

### Hard variation

Return symmetric difference across two arrays.

### Real interview variation

Find cached item IDs no longer present after a sync.

## Common Mistakes

- Implementing symmetric difference when only `a - b` was requested.
- Using `includes` for every value.
- Returning duplicates despite a unique-output requirement.
- Mutating the input arrays.

## Quick Revision Notes

- Difference here means `a - b`.
- Build excluded set from `b`.
- Scan `a` for order.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
