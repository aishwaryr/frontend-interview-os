# Interview Guide: Frequency Counter

## Hints

### Hint 1

You need to remember a number for each distinct value.

### Hint 2

The current value either has an existing count or starts at zero.

### Hint 3

Use a `Map`.

### Hint 4

On every visit, write `oldCount + 1`.

### Hint 5

`counts.set(value, (counts.get(value) ?? 0) + 1)` is the core operation.

## Complexity

### Time Complexity

Each item performs one average O(1) map update.

### Space Complexity

O(u) for the map of counts, where `u` is the number of distinct values.

### Tradeoffs

- `Map` handles all key types.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you return the most frequent value?
- How would you count by derived key?
- How would you keep only the top K counts for a stream?
- Can you compare two arrays using frequency maps?

## Variants

### Easier variation

Count characters in a string.

### Medium variation

Find duplicate values using counts.

### Hard variation

Return top K frequent elements.

### Real interview variation

Count event names in analytics payloads.

## Common Mistakes

- Using an object and accidentally stringifying object keys.
- Forgetting to handle the first occurrence.
- Using `|| 0` when zero-like keys are confused with counts.
- Returning only distinct values instead of counts.

## Quick Revision Notes

- Frequency counter = key -> count.
- Read old count, increment, store.
- Map avoids key coercion.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
