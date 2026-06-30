# Interview Guide: Rotate Array

## Hints

### Hint 1

A rotation by `n` changes nothing.

### Hint 2

Try reducing `k` with modulo.

### Hint 3

The useful primitive is reversing part of the array.

### Hint 4

Reverse all, then reverse each segment.

### Hint 5

For right rotation: whole array, first `k`, then `k` through end.

## Complexity

### Time Complexity

Each element is swapped a constant number of times.

### Space Complexity

O(1) extra space because rotation happens in-place with swaps.

### Tradeoffs

- Three reversals use O(1) extra space.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you rotate left instead?
- Can you return a new rotated array instead of mutating?
- How would this work for typed arrays?
- Can you rotate using the cycle replacement method?

## Variants

### Easier variation

Return a new right-rotated array using slices.

### Medium variation

Rotate in-place with reversals.

### Hard variation

Rotate in-place using cycle replacement.

### Real interview variation

Rotate carousel items without rebuilding all item objects.

## Common Mistakes

- Forgetting `k % nums.length`.
- Not handling an empty array before modulo.
- Allocating a new array when in-place is required.
- Using left rotation logic for right rotation.

## Quick Revision Notes

- Normalize k.
- Right rotate via reverse all, reverse prefix, reverse suffix.
- Handle empty arrays early.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
