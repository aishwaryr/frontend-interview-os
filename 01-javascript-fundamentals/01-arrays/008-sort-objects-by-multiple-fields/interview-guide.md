# Interview Guide: Sort Objects by Multiple Fields

## Hints

### Hint 1

Think of dictionary ordering: compare first key, then second key only on ties.

### Hint 2

You can reuse the single-field comparison idea repeatedly.

### Hint 3

The data structure is an ordered array of sort criteria.

### Hint 4

Inside the comparator, loop over criteria and return on the first difference.

### Hint 5

If every criterion is equal, return `0`.

## Complexity

### Time Complexity

Sorting is O(n log n), and each comparison may inspect up to k fields.

### Space Complexity

O(n) for the copied array. The criteria array is provided by the caller, and sorting may use additional engine-managed space.

### Tradeoffs

- One comparator keeps sorting stable and direct.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you support custom comparator functions per field?
- How would you handle null values first or last?
- Can you support nested paths?
- How would this power a data grid multi-sort feature?

## Variants

### Easier variation

Sort by two known fields.

### Medium variation

Sort by a criteria array.

### Hard variation

Support nested paths and null ordering.

### Real interview variation

Implement multi-column sort for an admin table.

## Common Mistakes

- Sorting once per field in the wrong order.
- Ignoring tie-breaker priority.
- Mutating the original array.
- Returning after the first criterion even when values are equal.

## Quick Revision Notes

- Multi-sort is lexicographic compare.
- Criteria order is priority order.
- Return only when a field differs.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
