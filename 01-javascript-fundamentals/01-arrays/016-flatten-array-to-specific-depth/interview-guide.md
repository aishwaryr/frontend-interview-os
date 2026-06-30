# Interview Guide: Flatten Array to Specific Depth

## Hints

### Hint 1

Full flattening and one-level flattening differ only by a stopping condition.

### Hint 2

Track how many levels you are still allowed to expand.

### Hint 3

Use recursion or a stack with depth metadata.

### Hint 4

Expand nested arrays only when `remainingDepth > 0`.

### Hint 5

When expanding, recurse with `remainingDepth - 1`; otherwise push the item unchanged.

## Complexity

### Time Complexity

Each visited element up to the flattened depth is processed once.

### Space Complexity

O(r) for the returned array, where `r` is the number of items produced at the requested depth. Recursive calls use O(d) call stack space for depth `d`.

### Tradeoffs

- Recursion mirrors the problem clearly.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you implement this iteratively?
- What should happen for `Infinity` depth?
- Can this be lazy with a generator?
- How would you preserve sparse array holes?

## Variants

### Easier variation

Flatten exactly one level.

### Medium variation

Flatten up to a numeric depth.

### Hard variation

Implement a lazy depth-limited flattener.

### Real interview variation

Expand nested navigation only to the visible menu depth.

## Common Mistakes

- Flattening all depths regardless of the `depth` argument.
- Treating depth zero as full flatten.
- Using `typeof` to detect arrays.
- Mutating nested arrays while building output.

## Quick Revision Notes

- Carry remaining depth.
- Expand arrays only while depth > 0.
- Depth zero returns top-level items unchanged.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
