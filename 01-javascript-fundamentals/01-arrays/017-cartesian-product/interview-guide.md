# Interview Guide: Cartesian Product

## Hints

### Hint 1

Think of combinations as partial answers that grow one column at a time.

### Hint 2

Start with one empty combination.

### Hint 3

Use nested loops over current combinations and current options.

### Hint 4

Create a new array for each expanded combination.

### Hint 5

After processing each input array, replace the current combinations with the expanded ones.

## Complexity

### Time Complexity

The output size is the product of the input lengths, and each tuple has length k.

### Space Complexity

O(p * k) for the returned combinations, where `p` is the product of input lengths and `k` is the number of input arrays.

### Tradeoffs

- Iterative building is easy to read.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you produce combinations lazily?
- How would you stop after the first N combinations?
- Can you support named dimensions?
- How would you avoid memory blowups?

## Variants

### Easier variation

Cartesian product of exactly two arrays.

### Medium variation

Product of any number of arrays.

### Hard variation

Lazy generator for the product.

### Real interview variation

Generate all configuration variants from option groups.

## Common Mistakes

- Returning flattened values instead of tuples.
- Forgetting the empty input case.
- Mutating and reusing the same combination array.
- Ignoring empty inner arrays.

## Quick Revision Notes

- Product builds tuples one dimension at a time.
- Start from `[[]]`.
- Output size can explode quickly.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
