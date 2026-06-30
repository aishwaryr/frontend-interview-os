# Interview Guide: Sort Objects by Single Field

## Hints

### Hint 1

The input array should keep its original order outside the function.

### Hint 2

`Array.prototype.sort` mutates the array it is called on.

### Hint 3

Use a comparator function.

### Hint 4

Compare `a[field]` and `b[field]`, then multiply by direction.

### Hint 5

Return `-1`, `0`, or `1` from the comparator.

## Complexity

### Time Complexity

Sorting dominates at O(n log n). Copying uses O(n) extra space.

### Space Complexity

O(n) for the copied array. The engine may also use O(log n) to O(n) internal sorting space depending on implementation.

### Tradeoffs

- Copying protects callers from mutation.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you handle missing fields?
- How would you sort locale-aware strings?
- Can the sort be stable across all target runtimes?
- How would you sort by a derived value?

## Variants

### Easier variation

Sort numbers ascending.

### Medium variation

Sort objects by one numeric field.

### Hard variation

Support nested field paths like `user.age`.

### Real interview variation

Sort table rows by the clicked column.

## Common Mistakes

- Mutating the input array accidentally.
- Returning booleans from the comparator.
- Using subtraction for string fields.
- Ignoring descending order.

## Quick Revision Notes

- Copy before sorting.
- Comparator returns negative, zero, or positive.
- Use direction multiplier for asc/desc.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
