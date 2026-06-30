# Interview Guide: Flatten Nested Array

## Hints

### Hint 1

Ask whether each element is a value or more work.

### Hint 2

The order should be the same as reading from left to right.

### Hint 3

A stack can replace recursive calls.

### Hint 4

When you pop an array, push its children in reverse order.

### Hint 5

Emit values immediately and expand arrays until no nested arrays remain.

## Complexity

### Time Complexity

Each nested slot is processed once.

### Space Complexity

O(n) for the returned flat array. The explicit stack can also grow to O(n) in the worst case.

### Tradeoffs

- Recursive solutions are concise but may overflow on very deep nesting.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you flatten only to a specific depth?
- Can this be implemented as a generator?
- How would sparse arrays be handled?
- What changes if array-like objects should also be flattened?

## Variants

### Easier variation

Flatten one level only.

### Medium variation

Flatten to a provided depth.

### Hard variation

Flatten lazily with an iterator.

### Real interview variation

Normalize nested UI menu items into a render list.

## Common Mistakes

- Using `array.flat()` when the interviewer expects manual traversal.
- Losing order by pushing nested items in the wrong direction.
- Testing arrays with `typeof item === "array"`.
- Mutating nested arrays while traversing.

## Quick Revision Notes

- Flattening is DFS over nested arrays.
- Use `Array.isArray`.
- Stack order matters: reverse children before pushing.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
