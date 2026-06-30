# Interview Guide: Merge Two Sorted Arrays

## Hints

### Hint 1

The input arrays already give you useful order.

### Hint 2

At any step, compare only the two current front values.

### Hint 3

Use two pointers.

### Hint 4

Advance the pointer whose value you append.

### Hint 5

After one pointer reaches the end, append the remaining suffix from the other array.

## Complexity

### Time Complexity

Each input element is appended exactly once.

### Space Complexity

O(n + m) for the returned merged array. The pointer variables use O(1) extra working space.

### Tradeoffs

- Two-pointer merge is linear.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you merge in-place when the first array has extra capacity?
- How would you merge descending arrays?
- How would you merge k sorted arrays?
- How would this work for sorted linked lists?

## Variants

### Easier variation

Merge two sorted arrays into a new array.

### Medium variation

Merge in-place with buffer space.

### Hard variation

Merge k sorted arrays efficiently.

### Real interview variation

Merge two sorted pages of timestamped events.

## Common Mistakes

- Sorting after concatenating instead of using sorted order.
- Forgetting to append leftovers.
- Advancing the wrong pointer.
- Dropping duplicate values.

## Quick Revision Notes

- Classic two-pointer merge.
- Compare heads, append smaller, advance.
- Do not forget leftovers.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
