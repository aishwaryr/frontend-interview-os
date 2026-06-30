# Interview Guide: Partition Array

## Hints

### Hint 1

There are only two possible destinations for each item.

### Hint 2

Stability means append order matters.

### Hint 3

Use two arrays: one for passing, one for failing.

### Hint 4

Scan once and push into the correct bucket.

### Hint 5

Concatenate the passing bucket before the failing bucket.

## Complexity

### Time Complexity

Each item is examined once and copied into one bucket.

### Space Complexity

O(n) for the two buckets and returned concatenated array.

### Tradeoffs

- Two buckets are simple and stable but use O(n) space.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- Can you do it in-place if stability is not required?
- Can you do a stable in-place partition?
- How would you partition into more than two groups?
- How would you preserve original indices?

## Variants

### Easier variation

Split into two arrays instead of one concatenated array.

### Medium variation

Stable partition into pass-first order.

### Hard variation

In-place stable partition.

### Real interview variation

Move selected rows above unselected rows in a table.

## Common Mistakes

- Using sort and relying on comparator quirks.
- Breaking stable order within groups.
- Calling the predicate multiple times with side effects.
- Mutating the input unexpectedly.

## Quick Revision Notes

- Partition = split by predicate.
- Stable partition uses pass and fail buckets.
- Return pass bucket followed by fail bucket.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
