# Interview Guide: Unzip Arrays

## Hints

### Hint 1

Each input pair contributes to both outputs.

### Hint 2

Think of the pairs as two columns.

### Hint 3

Use two arrays, one per column.

### Hint 4

Destructure each pair as `[first, second]`.

### Hint 5

Push `first` into the first output and `second` into the second output.

## Complexity

### Time Complexity

Each pair is read once.

### Space Complexity

O(n) for the two returned arrays. Working space outside the output is O(1).

### Tradeoffs

- Two arrays are direct for pairs.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you unzip tuples of any length?
- How should invalid pairs be handled?
- Can this be a lazy iterator?
- How does this relate to matrix transpose?

## Variants

### Easier variation

Unzip pairs into two arrays.

### Medium variation

Unzip triples into three arrays.

### Hard variation

Generic unzip for variable-length tuples.

### Real interview variation

Split paired chart points into x-values and y-values.

## Common Mistakes

- Returning `[first, second]` from only the last pair.
- Forgetting to handle empty input as `[[], []]`.
- Mutating the original pair arrays.
- Assuming every value is numeric.

## Quick Revision Notes

- Unzip pairs = extract columns.
- Always return `[firstValues, secondValues]`.
- Scan once with destructuring.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
