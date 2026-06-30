# Interview Guide: Merge Intervals

## Hints

### Hint 1

Unsorted intervals make local overlap checks unreliable.

### Hint 2

After sorting, only the last merged interval can overlap the current one.

### Hint 3

Use sorting plus a result stack.

### Hint 4

Compare `currentStart <= lastEnd`.

### Hint 5

Extend `last[1]` with `Math.max(last[1], currentEnd)` when overlapping.

## Complexity

### Time Complexity

Sorting costs O(n log n); the sweep is linear.

### Space Complexity

O(n) for copied intervals and the merged output. The sort may also use implementation-dependent auxiliary space.

### Tradeoffs

- Sorting is simple and robust for unsorted input.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- What if touching intervals should not merge?
- How would you insert one new interval into an already merged list?
- How would you count maximum overlapping intervals?
- Can this handle date objects?

## Variants

### Easier variation

Detect whether any intervals overlap.

### Medium variation

Merge unsorted intervals.

### Hard variation

Insert and merge a new interval in one pass.

### Real interview variation

Merge busy calendar ranges before finding free slots.

## Common Mistakes

- Trying to merge before sorting.
- Comparing with every previous interval instead of the last merged one.
- Forgetting to copy interval arrays.
- Using `<` instead of `<=` when touching intervals should merge.

## Quick Revision Notes

- Sort by start.
- Merged result behaves like a stack.
- Current interval only compares with last merged interval.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
