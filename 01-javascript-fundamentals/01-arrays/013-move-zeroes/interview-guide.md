# Interview Guide: Move Zeroes

## Hints

### Hint 1

The non-zero values should appear exactly as before, just earlier.

### Hint 2

Think of writing the next kept value into the next open slot.

### Hint 3

Use two pointers: read and write.

### Hint 4

First compact non-zero values, then fill the rest with zero.

### Hint 5

When `nums[read] !== 0`, assign `nums[write] = nums[read]` and increment `write`.

## Complexity

### Time Complexity

One scan plus one tail fill is O(n).

### Space Complexity

O(1) extra space because the array is compacted in-place with pointers.

### Tradeoffs

- Write-pointer compaction is stable and simple.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you move all values equal to a target?
- Can you minimize writes when there are few zeroes?
- How would you solve this for linked lists?
- What changes if order does not matter?

## Variants

### Easier variation

Return a new array with zeroes at the end.

### Medium variation

Move zeroes in-place while preserving order.

### Hard variation

Stable partition an array in-place by predicate.

### Real interview variation

Move empty form fields to the bottom while preserving filled-field order.

## Common Mistakes

- Using `sort` and changing non-zero order.
- Creating a new array when in-place is required.
- Forgetting to fill the tail with zeroes.
- Treating falsy values like `null` or `false` as zero.

## Quick Revision Notes

- Stable compaction problem.
- Write pointer marks next non-zero slot.
- Fill tail with zeroes after compaction.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
