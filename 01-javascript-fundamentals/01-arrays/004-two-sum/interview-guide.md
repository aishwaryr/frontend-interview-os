# Interview Guide: Two Sum

## Hints

### Hint 1

For a value `x`, what exact value must its partner be?

### Hint 2

You only need to compare with values seen earlier.

### Hint 3

Use a `Map` from number to index.

### Hint 4

Check `target - nums[i]` before storing `nums[i]`.

### Hint 5

Return `[seen.get(complement), i]` when the complement is present.

## Complexity

### Time Complexity

The array is scanned once and map operations are average O(1).

### Space Complexity

O(n) in the worst case for the map of previously seen values. The returned pair itself is O(1).

### Tradeoffs

- Hash lookup gives linear time with extra memory.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you return all pairs?
- What if the input is sorted?
- Can you solve it with O(1) extra memory if mutation is allowed?
- How would you extend this to three sum?

## Variants

### Easier variation

Return true if any pair exists.

### Medium variation

Return all unique value pairs.

### Hard variation

Solve three sum without duplicate triplets.

### Real interview variation

Find two invoice adjustments that match a reconciliation target.

## Common Mistakes

- Storing the current value before checking and reusing the same index.
- Returning values when indices are requested.
- Using an object map and colliding stringified keys unexpectedly.
- Forgetting negative complements.

## Quick Revision Notes

- Complement is `target - current`.
- Map value to index.
- Check before insert to avoid same-index reuse.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
