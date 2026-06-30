# Interview Guide: Group By

## Hints

### Hint 1

Every item needs a derived key.

### Hint 2

The output is a collection of buckets.

### Hint 3

Use an object or `Map` where each key points to an array.

### Hint 4

Initialize a bucket the first time a key appears.

### Hint 5

Then push the current item into that bucket.

## Complexity

### Time Complexity

Each item is assigned to one bucket once.

### Space Complexity

O(n) for the grouped output because every input item is stored in exactly one bucket. The bucket index has O(g) keys for `g` groups.

### Tradeoffs

- Objects are convenient for string keys and JSON-like output.

A better approach matches the prompt's constraints directly and keeps the important invariant visible. A worse approach usually ignores an order, mutation, or scale requirement and then tries to patch the result afterward.

## Interview Follow-ups

- How would you support arbitrary object keys?
- Should the return type be `Map` instead of object?
- How would you group by multiple fields?
- Can this be streamed incrementally?

## Variants

### Easier variation

Group strings by first letter.

### Medium variation

Group objects by a field name.

### Hard variation

Group by multiple nested keys.

### Real interview variation

Group activity events by calendar day for a timeline.

## Common Mistakes

- Forgetting to initialize the group array.
- Overwriting a group instead of pushing into it.
- Calling a string selector as a function.
- Using a normal object when keys like `constructor` matter.

## Quick Revision Notes

- Group by means key -> bucket array.
- Compute one key per item.
- Initialize before push.

### Interview Checklist

- Restate mutation and ordering requirements before coding.
- Name the core pattern out loud.
- Test empty input, duplicates, and boundary sizes.
- Explain time and space complexity clearly.
