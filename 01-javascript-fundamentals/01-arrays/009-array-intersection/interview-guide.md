# Interview Guide: Array Intersection

## Hints

### Hint 1

Which array should answer membership quickly?

### Hint 2

The output order comes from the first array.

### Hint 3

Use a `Set` for the second array.

### Hint 4

Use another `Set` to avoid returning duplicates.

### Hint 5

Keep a value if `setB.has(value)` and it has not already been emitted.

## Complexity

### Time Complexity

Building the lookup set and scanning the first array are both linear.

### Space Complexity

O(m) for the lookup set built from the second array, plus O(r) for emitted tracking and result values.

### Tradeoffs

- Sets give linear time with extra memory.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you include duplicate counts?
- What if both arrays are already sorted?
- How would you intersect more than two arrays?
- Can this run as a stream when one side fits in memory?

## Variants

### Easier variation

Return true if any overlap exists.

### Medium variation

Return unique intersection.

### Hard variation

Return multiset intersection with counts.

### Real interview variation

Find selected IDs that still exist in a refreshed API response.

## Common Mistakes

- Returning duplicates from the first array.
- Preserving order from the wrong array.
- Using nested loops unnecessarily.
- Confusing intersection with union.

## Quick Revision Notes

- Intersection = keep values present in both.
- Set `b` for lookup.
- Track emitted values for unique output.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
